import React, { useState } from "react";

const navItems = [
  { href: "#hero-area", label: "Home", labelAm: "መነሻ" },
  { href: "#services", label: "Services", labelAm: "አገልግሎቶች" },
  { href: "#contact", label: "Contact", labelAm: "ግንኙነት" },
];

const services = [
  {
    icon: "lni lni-capsule",
    title: "Supply of Raw Materials & Finished Products",
    titleAm: "ጥሬ ዕቃዎች እና ያለቁ ምርቶች አቅርቦት",
    text: "We supply high-quality raw materials and finished products to meet diverse industrial needs, including premium plastics, durable pipes, essential materials for the food and agro industry, and top-grade petrochemical products.",
    textAm:
      "ፕሪሚየም ፕላስቲኮችን፣ ረጅም ጊዜ የሚቆዩ ቧንቧዎችን፣ ለምግብ እና ለግብርና ኢንዱስትሪ አስፈላጊ የሆኑ ቁሳቁሶችን እና ከፍተኛ ደረጃ ያላቸውን የፔትሮኬሚካል ምርቶችን ጨምሮ የተለያዩ የኢንዱስትሪ ፍላጎቶችን ለማሟላት ከፍተኛ ጥራት ያላቸውን ጥሬ ዕቃዎችን እና ያለቁ ምርቶችን እናቀርባለን።",
  },
  {
    icon: "lni lni-bootstrap",
    title: "Supply of Industrial Machinery",
    titleAm: "የኢንዱስትሪ ማሽነሪዎች አቅርቦት",
    text: "We provide comprehensive industrial machinery solutions, including the supply, installation, and commissioning of high-performance equipment. Our services ensure seamless integration and optimal performance.",
    textAm:
      "ከፍተኛ አፈጻጸም ያላቸውን መሳሪያዎች አቅርቦት፣ ተከላ እና ስራ ማስጀመርን ጨምሮ አጠቃላይ የኢንዱስትሪ ማሽነሪ መፍትሄዎችን እናቀርባለን። አገልግሎቶቻችን እንከን የለሽ ውህደት እና ጥሩ አፈጻጸምን ያረጋግጣሉ።",
  },
  {
    icon: "lni lni-shortcode",
    title: "Supply of Electrical Equipment & Solar Energy",
    titleAm: "የኤሌክትሪክ ዕቃዎች እና የፀሐይ ኃይል አቅርቦት",
    text: "We supply electrical equipment and solar energy solutions, including generators, transformers, cables, solar panels, lanterns, and batteries. Our services include installation, testing, and commissioning.",
    textAm:
      "ጄነሬተሮችን፣ ትራንስፎርመሮችን፣ ኬብሎችን፣ የፀሐይ ፓነሎችን፣ ፋኖሶችን እና ባትሪዎችን ጨምሮ የኤሌክትሪክ መሳሪያዎችን እና የፀሐይ ኃይል መፍትሄዎችን እናቀርባለን። አገልግሎቶቻችን ተከላ፣ ሙከራ እና ስራ ማስጀመርን ያካትታሉ።",
  },
];

const newsItems = [
  {
    title: "How industrial supply chains drive growth",
    titleAm: "የኢንዱስትሪ አቅርቦት ሰንሰለቶች እድገትን እንዴት ያፋጥናሉ",
    date: "Jun 25, 2026",
    dateAm: "ሰኔ 25፣ 2026",
    category: "Industry Insights",
    categoryAm: "የኢንዱስትሪ ግንዛቤ",
    image: "assets/images/blog/1.jpg",
    body: `Strong industrial supply chains are the backbone of economic development. When businesses can reliably source raw materials, machinery, and energy equipment, they can plan production cycles with confidence, reduce downtime, and respond faster to market demand.

At AAMT Trading PLC, we have seen firsthand how a well-managed supply chain creates a ripple effect—factories run more efficiently, delivery timelines shrink, and client satisfaction rises. By partnering with trusted international suppliers and maintaining local inventory buffers, we help our clients avoid the disruptions that derail growth.

Key factors that strengthen industrial supply chains include transparent supplier relationships, robust logistics networks, and proactive procurement planning. Companies that invest in these areas consistently outperform those that treat supply chain management as an afterthought.

Looking ahead, digitalization and real-time tracking are set to further transform how industrial goods move from manufacturer to end-user. AAMT is committed to staying at the forefront of these changes so our clients always have the edge they need.`,
    bodyAm: `ጠንካራ የኢንዱስትሪ አቅርቦት ሰንሰለቶች የኢኮኖሚ ልማት መሠረቶች ናቸው። ንግዶች ጥሬ ዕቃዎችን፣ ማሽነሪዎችን እና የኢነርጂ መሣሪያዎችን በተአማኒነት ማቅረብ ሲችሉ፣ የምርት ዑደቶችን በተሻለ ሁኔታ ማቀድ፣ የቆም ጊዜን መቀነስ እና ለገበያ ፍላጎት በፍጥነት ምላሽ መስጠት ይቻላቸዋል።

በኤኤምቲ ትሬዲንግ ኃ.የተ.የግ.ማ ሥራ ዘመናችን፣ በደንብ የሚተዳደር አቅርቦት ሰንሰለት እንደ ሰንሰለት ሪፕልን ውጤት እንደሚፈጥር ቀጥታ ምልከታ አድርገናል — ፋብሪካዎች በተሻለ ሁኔታ ይሠራሉ፣ የመላኪያ ጊዜዎች ይጠብባሉ፣ የደንበኛ እርካታም ከፍ ይላል። ታምኑ ዓለም አቀፍ አቅራቢዎች ጋር በመተባበር እና የአካባቢ ክምችት ይዞ በማቆየት፣ ደንበኞቻችን እድገትን ከሚያደናቅፉ ችግሮች እንዲድኑ እንረዳቸዋለን።

የኢንዱስትሪ አቅርቦት ሰንሰለቶችን ለማጠናከር ቁልፍ ምክንያቶች ግልፅ የአቅራቢ ግንኙነቶችን፣ ጠንካራ የሎጅስቲክስ አውታሮችን እና ቀድሞ የሚደረግ ግዥ እቅድ ያካትታሉ። በእነዚህ ዘርፎች ላይ ኢንቨስት የሚያደርጉ ኩባንያዎች የአቅርቦት ሰንሰለት አስተዳደርን ሁለተኛ ደረጃ አድርገው ከሚቆጥሩ ያሻለ አፈጻጸም ያስቀምጣሉ።

ወደ ፊት ሲታይ፣ ዲጂታላይዜሽን እና ሪል-ታይም ትራኪንግ የኢንዱስትሪ ዕቃዎች ከአምራቹ እስከ ተጠቃሚው ድረስ የሚጓዙበትን ሁኔታ ይቀይሩታል። ኤኤምቲ ደንበኞቻቸው ሁልጊዜ ያስፈልጋቸውን ጥቅም እንዲያገኙ ከዚህ ለውጦች ፊት ለፊት ለመቆም ቁርጠኛ ነው።`,
  },
  {
    title: "Why sustainable energy solutions matter now",
    titleAm: "ዘላቂ የኢነርጂ መፍትሄዎች አሁን ለምን አስፈላጊ ናቸው",
    date: "Jun 18, 2026",
    dateAm: "ሰኔ 18፣ 2026",
    category: "Energy",
    categoryAm: "ኢነርጂ",
    image: "assets/images/blog/2.jpg",
    body: `The global shift toward sustainable energy is no longer a distant ambition—it is an urgent operational reality for industries across Africa and beyond. Rising fuel costs, grid instability, and increasing environmental expectations are pushing businesses to rethink how they power their operations.

Solar panels, battery storage systems, and energy-efficient generators offer a path to both cost savings and operational resilience. A manufacturing plant that pairs solar generation with a reliable battery bank, for example, can dramatically reduce its dependence on diesel generators and protect itself from utility outages.

AAMT Trading PLC supplies a full range of electrical and solar energy equipment, including high-performance solar panels, transformers, cables, lanterns, and batteries. Our team also handles installation, testing, and commissioning, ensuring every system performs to specification from day one.

Investing in sustainable energy today is not just good for the environment—it directly strengthens a company's bottom line and long-term competitiveness. We encourage businesses of all sizes to explore the options available and take the first step toward energy independence.`,
    bodyAm: `ወደ ዘላቂ ኢነርጂ የሚደረገው ዓለም አቀፍ ለውጥ ሩቅ ምኞት አይደለም — ለአፍሪካ እና ከዚያ ባሻገር ለሚገኙ ኢንዱስትሪዎች አፋጣኝ የሥራ እውነታ ሆኗል። ጨምሮ ያለ የነዳጅ ዋጋ፣ የኃይል መስመር አለመረጋጋት እና እያደገ ያለ የአካባቢ ሁኔታ ትጠበቃ ንግዶች ሥራዎቻቸውን እንዴት እንደሚያሞቁ እንደገና እንዲያስቡ እያስገደዳቸው ነው።

የፀሐይ ፓነሎች፣ የባትሪ ማከማቻ ስርዓቶች እና ኢነርጂ-ቆጣቢ ጄነሬተሮች ወጪ ቆጣቢነትን እና የሥራ ተቋቋሚነትን ለማስጠበቅ መንገድ ይሰጣሉ። ለምሳሌ፣ የፀሐይ ኃይል ምንጭ ከሚታምን ባትሪ ቤንክ ጋር ያጣመረ ፋብሪካ ከዲዘል ጄነሬተሮች ጥገኝነቱን በከፍተኛ ሁኔታ ቀነስ ማድረግ እና ከመሠረተ ልማት ፍቅ ጊዜ ራሱን መጠበቅ ይችላል።

ኤኤምቲ ትሬዲንግ ኃ.የተ.የግ.ማ ከፍተኛ አፈጻጸም ያላቸው የፀሐይ ፓነሎችን፣ ትራንስፎርመሮችን፣ ኬብሎችን፣ ፋኖሶችን እና ባትሪዎችን ጨምሮ ሙሉ ተከታዩን የኤሌክትሪክ እና የፀሐይ ኢነርጂ መሣሪያዎችን ያቀርባል። ቡድናችን ደግሞ ተከላ፣ ሙከራ እና ሥራ ማስጀመርን ያስተናግዳል፣ ይህም ዕለቱኑ እያንዳንዱ ስርዓት እንደ ዝርዝር ስፔሲፊኬሽን ይሠራ ዘንድ ያረጋግጣል።

ዛሬ በዘላቂ ኢነርጂ ላይ ኢንቨስት ማድረግ ለአካባቢ ብቻ ጥሩ አይደለም — ቀጥታ የኩባንያ ትርፍ ማግኛ ወሰን እና የረዥም ጊዜ ተወዳዳሪነትን ያጠናክራል። የሁሉም መጠን ያላቸው ንግዶች ያሉ አማራጮችን እንዲያጤኑ እና ወደ ኢነርጂ ነፃነት የሚወስደውን የመጀመሪያ ርምጃ እንዲወስዱ እናበረታታለን።`,
  },
  {
    title: "AAMT's approach to reliable machinery support",
    titleAm: "ኤኤምቲ ለአስተማማኝ የማሽነሪ ድጋፍ ያለው አቀራረብ",
    date: "Jun 10, 2026",
    dateAm: "ሰኔ 10፣ 2026",
    category: "Operations",
    categoryAm: "ሥራ አፈጻጸም",
    image: "assets/images/blog/3.jpg",
    body: `Industrial machinery is only as valuable as the support infrastructure around it. A piece of equipment that sits idle due to poor installation, lack of spare parts, or inadequate training quickly becomes a liability rather than an asset.

AAMT Trading PLC was founded with this principle in mind. We do not simply sell machinery—we provide end-to-end solutions that include careful selection, professional installation, and thorough commissioning. Our technical team works closely with each client to understand their specific production requirements and ensure the machinery integrates seamlessly into their existing operations.

After handover, our support does not stop. We maintain relationships with our clients to address any operational questions and assist with sourcing replacement components when needed. This long-term commitment is what sets AAMT apart from transactional equipment suppliers.

Whether you are setting up a new processing line or upgrading existing infrastructure, AAMT has the expertise and the network to deliver the right machinery at the right time—backed by the support that keeps it running.`,
    bodyAm: `የኢንዱስትሪ ማሽነሪ ያለው ዋጋ በዙሪያው ካለ ድጋፍ መሠረተ ልማት ጋር እኩል ነው። ደካማ ተከላ፣ የመለዋወጫ ዕቃ አለመኖር ወይም በቂ ያልሆነ ስልጠና ምክንያት ሥራ-አልባ ሆኖ የሚቀመጥ የሙያ ዕቃ በፍጥነት ከጠቀሜታ ይልቅ ኃላፊነት ሆኖ ይወጣል።

ኤኤምቲ ትሬዲንግ ኃ.የተ.የግ.ማ ይህን መርህ አስታውሶ ተቋቁሟል። ማሽነሪ ብቻ አንሸጥም — ጥንቃቄ የተሞላ ምርጫ፣ ሙያዊ ተከላ እና ጥልቅ ሥራ ማስጀመርን ያካተቱ ከጀምሮ እስከ ፍፃሜ ድረስ መፍትሄዎችን እናቀርባለን። የቴክኒክ ቡድናችን ከእያንዳንዱ ደንበኛ ጋር በቅርበት ሆኖ ልዩ የምርት ፍላጎቶቻቸውን ለመረዳት እና ማሽነሪው ሲቀናጅ ምንም ሳያቋርጥ ሥራ ውስጥ እንዲካተት ያረጋግጣሉ።

ከሕዝብ ወደ ደንበኛ ፈቃቅ ጊዜ ጀምሮ ድጋፋችን አያቆምም። ማናቸውን የሥራ ጥያቄዎች ለመፍታት እና ሲያስፈልግ መለዋወጫ ዕቃዎችን ለማቅረብ ከደንበኞቻችን ጋር ቀጣዩ ግንኙነት እናቆያለን። ይህ የረዥም ጊዜ ቁርጠኝነት ኤኤምቲን ከሌሎች ተራ የዕቃ አቅራቢዎች ለይቶ የሚያሳይ ነው።

አዲስ የምርት መስመር እያቋቋሙ ወይም ያለን መሠረተ ልማት እያሻሻሉ ቢሆኑ፣ ኤኤምቲ ትክክለኛውን ማሽነሪ በትክክለኛ ጊዜ ለማድረስ የሚያስፈልገውን ዕውቀት እና አውታር አለው — ሥራውን ቀጣይ የሚያደርጉ ድጋፎች ጋር አብሮ።`,
  },
];

const brandLogos = [1, 2, 3, 4, 5, 6];

function NavbarSection() {
  return (
    <section className="navbar-area navbar-nine">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                <img src="assets/images/logo-transparent.png" alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNine"
                aria-controls="navbarNine"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarNine"
              >
                <ul className="navbar-nav me-auto">
                  {navItems.map((item) => (
                    <li className="nav-item" key={item.href}>
                      <a
                        className={`page-scroll${item.href === "#hero-area" ? " active" : ""}`}
                        href={item.href}
                        data-en={item.label}
                        data-am={item.labelAm}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav-item dropdown me-3">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="langSwitcher"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="lni lni-world"></i> EN
                </a>
                <ul className="dropdown-menu" aria-labelledby="langSwitcher">
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0)"
                      onClick={() => window.changeLanguage?.("en")}
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0)"
                      onClick={() => window.changeLanguage?.("am")}
                    >
                      አማርኛ (Amharic)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-btn d-none d-lg-inline-block">
                <a className="menu-bar" href="#side-menu-left">
                  <i className="lni lni-menu"></i>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

function SidebarSection() {
  return (
    <>
      <div className="sidebar-left">
        <div className="sidebar-close">
          <a className="close" href="#close">
            <i className="lni lni-close"></i>
          </a>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-logo">
            <a href="index.html">
              <img src="assets/images/logo-transparent.png" alt="Logo" />
            </a>
          </div>
          <p
            className="text"
            data-en="Empowering Industries With Quality & Innovation"
            data-am="ኢንዱስትሪዎችን በጥራት እና በፈጠራ ማብቃት"
          >
            Empowering Industries With Quality & Innovation
          </p>
          <div className="sidebar-social align-items-center justify-content-center">
            <h5 className="social-title" data-en="Follow Us On" data-am="ይከተሉን">
              Follow Us On
            </h5>
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-facebook-filled"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-twitter-original"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-linkedin-original"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overlay-left"></div>
    </>
  );
}

function HeroSection() {
  return (
    <section id="hero-area" className="header-area header-eight">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="header-content">
              <h1
                data-en="Empowering Industries With Quality & Innovation"
                data-am="ኢንዱስትሪዎችን በጥራት እና በፈጠራ ማብቃት"
              >
                Empowering Industries With Quality & Innovation
              </h1>
              <p
                data-en="Supplying premium goods, advanced technology, and sustainable solutions—locally and globally."
                data-am="ፕሪሚየም እቃዎችን፣ የላቀ ቴክኖሎጂን እና ዘላቂ መፍትሄዎችን - በአገር ውስጥ እና በዓለም አቀፍ ደረጃ ማቅረብ።"
              >
                Supplying premium goods, advanced technology, and sustainable
                solutions—locally and globally.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="header-image">
              <img src="assets/images/header/hero-image.jpg" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-area about-five">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="about-image-five">
              <svg
                className="shape"
                width="106"
                height="134"
                viewBox="0 0 106 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.66654" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="1.66654" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="16.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="16.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="16.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="16.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="16.333" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="30.9998" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="74.6665" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="30.9998" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="74.6665" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="30.9998" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="74.6665" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="30.9998" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="74.6665" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="31" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="74.6668" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="45.6665" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="89.3333" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="60.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="1.66679" r="1.66667" fill="#DADADA" />
                <circle cx="60.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="16.3335" r="1.66667" fill="#DADADA" />
                <circle cx="60.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="31.0001" r="1.66667" fill="#DADADA" />
                <circle cx="60.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="45.6668" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="60.3335" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="88.6668" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="117.667" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="74.6668" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="103" r="1.66667" fill="#DADADA" />
                <circle cx="60.333" cy="132" r="1.66667" fill="#DADADA" />
                <circle cx="104" cy="132" r="1.66667" fill="#DADADA" />
              </svg>
              <img src="assets/images/about/about-img1.jpg" alt="about" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-five-content">
              <h6
                className="small-title text-lg"
                data-en="Our Vision, Mission & Values"
                data-am="ራዕያችን፣ ተልእኳችን እና እሴቶቻችን"
              >
                Our Vision, Mission & Values
              </h6>
              <h2
                className="main-title fw-bold"
                data-en="Driven by excellence, we bridge industries with quality products and sustainable solutions, meeting diverse needs locally and globally."
                data-am="በላቀ ደረጃ በመመራት ኢንዱስትሪዎችን ጥራት ባላቸው ምርቶች እና ዘላቂ መፍትሄዎች እናገናኛለን።"
              >
                Driven by excellence, we bridge industries with quality products
                and sustainable solutions, meeting diverse needs locally and
                globally.
              </h2>
              <div className="about-five-tab">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-who-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-who"
                      data-en="Our Vision"
                      data-am="ራዕያችን"
                      type="button"
                      role="tab"
                      aria-controls="nav-who"
                      aria-selected="true"
                    >
                      Our Vision
                    </button>
                    <button
                      className="nav-link"
                      id="nav-vision-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-vision"
                      data-en="our Mission"
                      data-am="ተልእኳችን"
                      type="button"
                      role="tab"
                      aria-controls="nav-vision"
                      aria-selected="false"
                    >
                      our Mission
                    </button>
                    <button
                      className="nav-link"
                      id="nav-history-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-history"
                      data-en="our Core Values"
                      data-am="ዋና እሴቶቻችን"
                      type="button"
                      role="tab"
                      aria-controls="nav-history"
                      aria-selected="false"
                    >
                      our Core Values
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-who"
                    role="tabpanel"
                    aria-labelledby="nav-who-tab"
                  >
                    <p
                      data-en="To become a globally recognized leader in industrial excellence, fostering sustainable growth and innovation across every sector we serve."
                      data-am="በዓለም አቀፍ ደረጃ በኢንዱስትሪ ላቀነት ቀዳሚ እንደሆን እና በእኛ የምንገልጹት ሁሉም ዘርፎች ላይ ዘላቂ እድገት እና ፈጠራ እንድናሳድግ መስራት።"
                    >
                      To become a globally recognized leader in industrial
                      excellence, fostering sustainable growth and innovation
                      across every sector we serve.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-vision"
                    role="tabpanel"
                    aria-labelledby="nav-vision-tab"
                  >
                    <p
                      data-en="To deliver reliable, high-quality products and services that empower industries, strengthen supply chains, and support long-term progress."
                      data-am="ኢንዱስትሪዎችን እንበረታታለን፣ የአቅርቦት ሰንሰለቶችን እናጠናክራለን እና የረዥም ጊዜ እድገትን እንደግፋ ከፍተኛ ጥራት ያላቸውን ምርቶች እና አገልግሎቶች መስጠት።"
                    >
                      To deliver reliable, high-quality products and services
                      that empower industries, strengthen supply chains, and
                      support long-term progress.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-history"
                    role="tabpanel"
                    aria-labelledby="nav-history-tab"
                  >
                    <p
                      data-en="Integrity, innovation, accountability, customer focus, and sustainability guide every decision we make and every partnership we build."
                      data-am="ትክክለኛነት፣ ፈጠራ፣ ሃላፊነት፣ ደንበኛ ትኩረት እና ዘላቂነት በምናደርገው እያንዳንድ ውሳኔ እና በምናገናኝበት እያንዳንድ ሽርክና ላይ መርሆች ናቸው።"
                    >
                      Integrity, innovation, accountability, customer focus, and
                      sustainability guide every decision we make and every
                      partnership we build.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="services-area services-eight">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6 data-en="Services" data-am="አገልግሎቶች">
                  Services
                </h6>
                <h2
                  className="fw-bold"
                  data-en="What we do"
                  data-am="የምንሰጣቸው አገልግሎቶች"
                >
                  What we do
                </h2>
                <p
                  data-en="Empowering Industries with Quality Services and Innovation."
                  data-am="ኢንዱስትሪዎችን በጥራት አገልግሎት እና በፈጠራ ማብቃት።"
                >
                  Empowering Industries with Quality Services and Innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.title}>
              <div className="single-services">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-content">
                  <h4 data-en={service.title} data-am={service.titleAm}>
                    {service.title}
                  </h4>
                  <p data-en={service.text} data-am={service.textAm}>
                    {service.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section id="call-action" className="call-action">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
            <div className="inner-content">
              <h2
                data-en="We love to make perfect solutions for your business"
                data-am="ለንግድዎ ፍጹም መፍትሄዎችን መስራት እንወዳለን።"
              >
                We love to make perfect <br />
                solutions for your business
              </h2>
              <p
                data-en="Partner with us for reliable supply chain solutions and innovative industrial technologies tailored to your growth."
                data-am="ለእድገትዎ ተብለው በተዘጋጁ አስተማማኝ የአቅርቦት ሰንሰለት መፍትሄዎች እና አዳዲስ የኢንዱስትሪ ቴክኖሎጂዎች ከእኛ ጋር አጋር ይሁኑ።"
              >
                Partner with us for reliable supply chain solutions and
                innovative industrial technologies tailored to your growth.
              </p>
              <div className="light-rounded-buttons">
                <a
                  href="#contact"
                  className="btn primary-btn-outline"
                  data-en="Get Started"
                  data-am="ይጀምሩ"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useCurrentLang() {
  const [lang, setLang] = React.useState("en");
  React.useEffect(() => {
    const switcher = document.getElementById("langSwitcher");
    if (!switcher) return;
    const observer = new MutationObserver(() => {
      setLang(switcher.textContent.includes("AM") ? "am" : "en");
    });
    observer.observe(switcher, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, []);
  return lang;
}

function ArticleModal({ item, onClose }) {
  const lang = useCurrentLang();
  if (!item) return null;

  const title    = lang === "am" && item.titleAm    ? item.titleAm    : item.title;
  const category = lang === "am" && item.categoryAm ? item.categoryAm : item.category;
  const date     = lang === "am" && item.dateAm     ? item.dateAm     : item.date;
  const body     = lang === "am" && item.bodyAm     ? item.bodyAm     : item.body;

  return (
    <div
      className="article-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <div
        className="article-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="article-modal-close"
          onClick={onClose}
          aria-label="Close article"
          type="button"
        >
          <i className="lni lni-close"></i>
        </button>
        <img
          src={item.image}
          alt={title}
          className="article-modal-image"
        />
        <div className="article-modal-body">
          <div className="meta-details mb-2">
            <span>{category}</span>
            <span>{date}</span>
          </div>
          <h2 id="article-modal-title">{title}</h2>
          {body.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  const [activeArticle, setActiveArticle] = useState(null);
  const lang = useCurrentLang();

  return (
    <>
      <div id="blog" className="latest-news-area section">
        <div className="section-title-five">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h6 data-en="Latest News" data-am="የቅርብ ጊዜ ዜና">
                    Latest News
                  </h6>
                  <h2
                    className="fw-bold"
                    data-en="Our latest news"
                    data-am="የቅርብ ጊዜ ዜናችን"
                  >
                    Our latest news
                  </h2>
                  <p
                    data-en="Updates, insights, and stories shaping the future of industry and innovation."
                    data-am="ኢንዱስትሪ እና ፈጠራ የሚያስተምሩ ዜናዎች፣ መረጃዎች እና ታሪኮች።"
                  >
                    Updates, insights, and stories shaping the future of
                    industry and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {newsItems.map((item) => {
              const title    = lang === "am" && item.titleAm    ? item.titleAm    : item.title;
              const category = lang === "am" && item.categoryAm ? item.categoryAm : item.category;
              const date     = lang === "am" && item.dateAm     ? item.dateAm     : item.date;
              return (
                <div className="col-lg-4 col-md-6" key={item.title}>
                  <div className="single-news">
                    <div className="image">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveArticle(item);
                        }}
                      >
                        <img src={item.image} alt={title} />
                      </a>
                    </div>
                    <div className="content-body">
                      <div className="meta-details">
                        <span>{category}</span>
                        <span>{date}</span>
                      </div>
                      <h4>{title}</h4>
                      <a
                        href="#"
                        className="read-more"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveArticle(item);
                        }}
                      >
                        {lang === "am" ? "ተጨማሪ ያንብቡ" : "Read More"}{" "}
                        <i className="lni lni-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ArticleModal
        item={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </>
  );
}

function ClientsSection() {
  return (
    <div id="clients" className="brand-area section">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6 data-en="Clients" data-am="ደንበኞች">
                  Clients
                </h6>
                <h2
                  className="fw-bold"
                  data-en="Trusted by industry leaders"
                  data-am="በኢንዱስትሪ መሪዎች የታመነ"
                >
                  Trusted by industry leaders
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-logo d-flex flex-wrap justify-content-center align-items-center">
              {brandLogos.map((logo) => (
                <div key={logo} className="single-logo">
                  <img
                    src={`assets/images/client-logo/${logo}.png`}
                    alt={`Client ${logo}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="contact-item-wrapper">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="lni lni-phone"></i>
                    </div>
                    <div className="contact-content">
                      <h4 data-en="Contact" data-am="ግንኙነት">
                        Contact
                      </h4>
                      <p>+251-930-00-04-77</p>
                      <p>+251-116-72-48-88</p>
                      <p>melkamu@aamtplc.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="lni lni-map-marker"></i>
                    </div>
                    <div className="contact-content">
                      <h4 data-en="Address" data-am="አድራሻ">
                        Address
                      </h4>
                      <p
                        data-en="4th Floor, Morning Star Mall, Cameroon St,"
                        data-am="4ኛ ፎቅ፣ ሞርኒንግ ስታር ሞል፣ ካሜሩን ጎዳና፣"
                      >
                        4th Floor, Morning Star Mall, Cameroon St,
                      </p>
                      <p
                        data-en="Addis Ababa, Ethiopia"
                        data-am="አዲስ አበባ፣ ኢትዮጵያ"
                      >
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="lni lni-alarm-clock"></i>
                    </div>
                    <div className="contact-content">
                      <h4 data-en="Opening Hours" data-am="የስራ ሰዓታት">
                        Opening Hours
                      </h4>
                      <p
                        data-en="Mon - Fri 9AM - 5PM"
                        data-am="ሰኞ - አርብ ከጠዋቱ 3 ሰዓት - 11 ሰዓት"
                      >
                        Mon - Fri 9AM - 5PM
                      </p>
                      <p
                        data-en="Sat - Sun 9AM - 1PM"
                        data-am="ቅዳሜ - እሁድ ከጠዋቱ 3 ሰዓት - 7 ሰዓት"
                      >
                        Sat - Sun 9AM - 1PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="contact-form-wrapper">
              <div className="row">
                <div className="col-xl-10 col-lg-8 mx-auto">
                  <div className="section-title text-center">
                    <span data-en="Get in Touch" data-am="ያግኙን">
                      Get in Touch
                    </span>
                    <h2 data-en="Ready to Get Started" data-am="ለመጀመር ዝግጁ ነዎት?">
                      Ready to Get Started
                    </h2>
                    <p
                      data-en="Contact us today for inquiries, quotes, or partnerships."
                      data-am="ለጥያቄዎች፣ ለዋጋ ማቅረቢያዎች ወይም ለሽርክና ዛሬ ያግኙን።"
                    >
                      Contact us today for inquiries, quotes, or partnerships.
                    </p>
                  </div>
                </div>
              </div>
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      data-en-placeholder="Name"
                      data-am-placeholder="ስም"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      data-en-placeholder="Email"
                      data-am-placeholder="ኢሜል"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      data-en-placeholder="Phone"
                      data-am-placeholder="ስልክ"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-en-placeholder="Subject"
                      data-am-placeholder="ርዕሰ ጉዳይ"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Type Message"
                      data-en-placeholder="Type Message"
                      data-am-placeholder="መልእክትዎን እዚህ ይጻፉ"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="button text-center rounded-buttons">
                      <button
                        type="submit"
                        className="btn primary-btn rounded-full"
                        data-en="Send Message"
                        data-am="መልእክት ላክ"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="map-section map-style-9">
      <div className="map-container">
        <object
          style={{ border: 0, height: 500, width: "100%" }}
          data="https://www.google.com/maps?q=Morning%20Star%20Mall%2C%20Bole%20Medhanialem%2C%20Addis%20Ababa%2C%20Ethiopia&output=embed"
        ></object>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="footer-area footer-eleven">
      <div className="container">
        <div className="footer-grid">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-widget f-about">
                <a
                  href="index.html"
                  className="footer-brand d-flex align-items-center"
                >
                  <img
                    src="assets/images/logo-transparent.png"
                    alt="AAMT Trading PLC"
                    className="me-2"
                  />
                  <div>
                    <h4
                      className="mb-0"
                      data-en="AAMT Trading"
                      data-am="ኤኤምቲ ትሬዲንግ"
                    >
                      AAMT Trading
                    </h4>
                  </div>
                </a>
                <p
                  className="mt-3"
                  data-en="AAMT Trading PLC specializes in offering cutting-edge industrial solutions, raw materials, and machinery. We empower organizations with robust and sustainable technology."
                  data-am="ኤኤምቲ ትሬዲንግ ኃ.የተ.የግ.ማ ዘመናዊ የኢንዱስትሪ መፍትሄዎችን፣ ጥሬ ዕቃዎችን እና ማሽነሪዎችን በማቅረብ ላይ ያተኩራል። ድርጅቶችን በጠንካራ እና ዘላቂ ቴክኖሎጂ እናበረታታለን።"
                >
                  AAMT Trading PLC specializes in offering cutting-edge
                  industrial solutions, raw materials, and machinery. We empower
                  organizations with robust and sustainable technology.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-widget footer-hours">
                <h5 data-en="Opening Hours" data-am="የስራ ሰዓታት">
                  Opening Hours
                </h5>
                <ul>
                  <li
                    data-en="Mon - Fri 9AM - 5PM"
                    data-am="ሰኞ - አርብ ከጠዋቱ 3 ሰዓት - 11 ሰዓት"
                  >
                    <i className="lni lni-alarm-clock"></i> Mon - Fri 9AM - 5PM
                  </li>
                  <li
                    data-en="Sat - Sun 9AM - 1PM"
                    data-am="ቅዳሜ - እሁድ ከጠዋቱ 3 ሰዓት - 7 ሰዓት"
                  >
                    <i className="lni lni-alarm-clock"></i> Sat - Sun 9AM - 1PM
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget footer-social">
                <h5 data-en="Social Media" data-am="ማህበራዊ ሚዲያ">
                  Social Media
                </h5>
                <ul className="social-links">
                  <li>
                    <a
                      href="https://facebook.com/aamt-trading"
                      aria-label="Facebook"
                    >
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/aamt-trading" aria-label="X">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/aamt-trading"
                      aria-label="Instagram"
                    >
                      <i className="lni lni-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/aamt-trading"
                      aria-label="LinkedIn"
                    >
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget footer-contact-info">
                <h5 data-en="Contact Info" data-am="የግንኙነት መረጃ">
                  Contact Info
                </h5>
                <ul>
                  <li>
                    <i className="lni lni-phone"></i> +251-930-00-04-77
                  </li>
                  <li>
                    <i className="lni lni-printer"></i> +251-116-72-48-88
                  </li>
                  <li>
                    <i className="lni lni-envelope"></i> melkamu@aamtplc.com
                  </li>
                  <li
                    data-en="4th Floor, Morning Star Mall, Cameroon St, Addis Ababa, Ethiopia"
                    data-am="4ኛ ፎቅ፣ ሞርኒንግ ስታር ሞል፣ ካሜሩን ጎዳና፣ አዲስ አበባ፣ ኢትዮጵያ"
                  >
                    <i className="lni lni-map-marker"></i> 4th Floor, Morning
                    Star Mall, Cameroon St, Addis Ababa, Ethiopia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <div className="container text-center">
          <p
            className="mb-0"
            data-en='Copyright © 2026 AAMT Trading PLC — Developed by <a href="https://solsportfolio.netlify.app/">Solomon Adugna</a>'
            data-am='የቅጂ መብት © 2026 ኤኤምቲ ትሬዲንግ ኃ.የተ.የግ.ማ — በ <a href="https://solsportfolio.netlify.app/">ሰለሞን አዱኛ</a> የተገነባ'
          >
            Copyright © 2026 AAMT Trading PLC — Developed by{" "}
            <a href="https://solsportfolio.netlify.app/">Solomon Adugna</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function AIAssistantSection() {
  return (
    <>
      <div className="ai-agent" id="aiAgent">
        <button
          className="ai-agent-toggle"
          id="aiAgentToggle"
          type="button"
          aria-label="Open AAMT assistant"
          aria-expanded="false"
          aria-controls="aiAgentPanel"
        >
          <i className="lni lni-comments"></i>
          <span>AI Agent</span>
        </button>
        <div className="ai-agent-panel" id="aiAgentPanel" aria-live="polite">
          <div className="ai-agent-header">
            <div className="ai-agent-title">
              <span className="ai-agent-avatar">
                <i className="lni lni-bulb"></i>
              </span>
              <div>
                <span className="ai-agent-status"></span>
                <h3 data-en="AAMT Assistant" data-am="የኤኤምቲ ረዳት">
                  AAMT Assistant
                </h3>
                <p
                  data-en="Ask about products, services, quotes, and contact details."
                  data-am="ስለ ምርቶች፣ አገልግሎቶች፣ ዋጋዎች እና የግንኙነት ዝርዝሮች ይጠይቁ።"
                >
                  Ask about products, services, quotes, and contact details.
                </p>
              </div>
            </div>
            <div className="ai-agent-actions">
              <button
                className="ai-agent-clear"
                id="aiAgentClear"
                type="button"
                aria-label="Clear chat history"
              >
                <i className="lni lni-trash-can"></i>
                <span>Clear</span>
              </button>
              <button
                className="ai-agent-close"
                id="aiAgentClose"
                type="button"
                aria-label="Close assistant"
              >
                <i className="lni lni-close"></i>
              </button>
            </div>
          </div>
          <div className="ai-agent-messages" id="aiAgentMessages">
            <div
              className="ai-message ai-message-bot"
              data-en="Hello, I am the AAMT assistant. Tell me what you need, and I will point you to the right service or contact option."
              data-am="ሰላም፣ እኔ የኤኤምቲ ረዳት ነኝ። ምን እንደሚፈልጉ ይንገሩኝ፣ እና ወደ ትክክለኛው አገልግሎት ወይም የግንኙነት አማራጭ እመራዎታለሁ።"
            >
              Hello, I am the AAMT assistant. Tell me what you need, and I will
              point you to the right service or contact option.
            </div>
          </div>
          <div className="ai-agent-suggestions" aria-label="Quick questions">
            <button
              type="button"
              data-prompt="I need industrial machinery"
              data-en="Machinery"
              data-am="ማሽነሪዎች"
            >
              Machinery
            </button>
            <button
              type="button"
              data-prompt="I want solar or electrical equipment"
              data-en="Solar & electrical"
              data-am="ሶላር እና ኤሌክትሪክ"
            >
              Solar & electrical
            </button>
            <button
              type="button"
              data-prompt="I need raw materials or finished products"
              data-en="Raw materials"
              data-am="ጥሬ ዕቃዎች"
            >
              Raw materials
            </button>
            <button
              type="button"
              data-prompt="How can I request a quote?"
              data-en="Request quote"
              data-am="ዋጋ ይጠይቁ"
            >
              Request quote
            </button>
          </div>
          <button
            className="ai-agent-clear-wide"
            id="aiAgentClearWide"
            type="button"
            data-en="Clear previous chat history"
            data-am="የቀድሞ የውይይት ታሪክን ያጽዱ"
          >
            <i className="lni lni-trash-can"></i>
            Clear previous chat history
          </button>
          <form className="ai-agent-form" id="aiAgentForm">
            <input
              type="text"
              id="aiAgentInput"
              placeholder="Type your question..."
              data-en-placeholder="Type your question..."
              data-am-placeholder="ጥያቄዎን እዚህ ይጻፉ..."
              autoComplete="off"
              required
            />
            <button type="submit" aria-label="Send message">
              <i className="lni lni-telegram-original"></i>
            </button>
          </form>
        </div>
      </div>
      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
    </>
  );
}

export default function PageSections() {
  return (
    <>
      <NavbarSection />
      <SidebarSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CallToActionSection />
      <BlogSection />
      <ClientsSection />
      <ContactSection />
      <MapSection />
      <FooterSection />
      <AIAssistantSection />
    </>
  );
}
