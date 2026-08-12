const fs = require('fs');
const zlib = require('zlib');
function crc32(buf) {
  const table = crc32.table || (crc32.table = Array.from({ length: 256 }, (_, n) => {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    return c >>> 0;
  }));
  let crc = -1;
  for (const b of buf) crc = (crc >>> 8) ^ table[(crc ^ b) & 0xff];
  return (crc ^ -1) >>> 0;
}
function chunk(type, data) {
  const out = Buffer.alloc(12 + data.length);
  out.writeUInt32BE(data.length, 0);
  out.write(type, 4, 4, 'ascii');
  data.copy(out, 8);
  out.writeUInt32BE(crc32(Buffer.concat([Buffer.from(type, 'ascii'), data])), 8 + data.length);
  return out;
}
const width = 240;
const height = 90;
const raw = Buffer.alloc((width * 3 + 1) * height);
for (let y = 0; y < height; y++) {
  const rowStart = y * (width * 3 + 1);
  raw[rowStart] = 0;
  for (let x = 0; x < width; x++) {
    const px = rowStart + 1 + x * 3;
    raw[px] = 8;    // red channel
    raw[px + 1] = 101; // green channel
    raw[px + 2] = 173; // blue channel
  }
}
const png = Buffer.concat([
  Buffer.from([0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A]),
  chunk('IHDR', Buffer.from([0,0,0,width,0,0,0,height,8,2,0,0,0])),
  chunk('IDAT', zlib.deflateSync(raw)),
  chunk('IEND', Buffer.alloc(0)),
]);
fs.mkdirSync('public/assets/images', { recursive: true });
fs.writeFileSync('public/assets/images/logo-yenob-raster.png', png);
console.log('logo created', fs.existsSync('public/assets/images/logo-yenob-raster.png'));
