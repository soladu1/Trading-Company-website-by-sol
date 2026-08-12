$files = @(
    'c:\Users\HP\Downloads\AAMT Website03\Business-1.0.0\style.css',
    'c:\Users\HP\Downloads\AAMT Website03\Business-1.0.0\public\style.css'
)
$oldBlock = @'
.navbar-area.navbar-nine .navbar-brand img {
  display: block;
  width: auto;
  height: 64px;
  max-width: 180px;
  object-fit: contain;
}
@media (max-width: 767px) {
  .navbar-area.navbar-nine .navbar-brand img {
    height: 48px;
    max-width: 135px;
  }
}
'@
$newBlock = @'
.navbar-area.navbar-nine .navbar-brand img {
  display: block;
  width: auto;
  height: 64px;
  max-width: 180px;
  object-fit: contain;
}
@media (min-width: 992px) {
  .navbar-area.navbar-nine .navbar-brand img {
    padding: 10px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 18px 45px rgba(4, 33, 87, 0.16);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }
  .navbar-area.navbar-nine .navbar-brand img:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 55px rgba(4, 33, 87, 0.2);
  }
}

.sidebar-logo img,
.footer-eleven .footer-brand img {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.98);
  padding: 10px;
  box-shadow: 0 12px 32px rgba(4, 33, 87, 0.14);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sidebar-logo img:hover,
.footer-eleven .footer-brand img:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(4, 33, 87, 0.18);
}

@media (max-width: 767px) {
  .navbar-area.navbar-nine .navbar-brand img {
    height: 48px;
    max-width: 135px;
  }
}
'@
foreach ($file in $files) {
    Write-Host "Processing $file"
    $text = Get-Content -Raw -Path $file
    if ($text -notmatch [regex]::Escape($oldBlock)) {
        Write-Host "Old block not found in $file"
        continue
    }
    $text = $text -replace [regex]::Escape($oldBlock), [regex]::Escape($newBlock)
    Set-Content -Path $file -Value $text -Encoding utf8
    Write-Host "Updated $file"
}
