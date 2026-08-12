import React, { useState } from "react";

const navItems = [
  { href: "#hero-area", label: "Home", labelAm: "መነሻ" },
  { href: "#services", label: "Services", labelAm: "አገልግሎቶች" },
  { href: "#contact", label: "Contact", labelAm: "ግንኙነት" },
];

const services = [
  {
    icon: "lni lni-capsule",
    title: "Technology Products & Digital Infrastructure",
    titleAm: "የቴክኖሎጂ ምርቶች እና ዲጂታል መሠረተ ልማት",
    text: "We deliver high-performance technology products and reliable infrastructure support that help businesses modernize operations, strengthen connectivity, and scale with confidence.",
    textAm:
      "ከፍተኛ የስራ አፈጻጸም ያላቸውን ቴክኖሎጂ ምርቶች እና አስተማማኝ የመሠረተ ልማት ድጋፎች በመስጠት ድርጅቶች ሥራቸውን እንዲያሻሽሉ፣ ግንኙነትን እንዲጠናከሩ እና በእርግጠኝነት እንዲያድጉ እንረዳለን።",
  },
  {
    icon: "lni lni-bootstrap",
    title: "Integrated Implementation & Project Delivery",
    titleAm: "የተቀናጀ አተገባበር እና የፕሮጀክት አቅርቦት",
    text: "We provide end-to-end solutions that combine planning, implementation, support, and commissioning so every project is delivered with precision and lasting value.",
    textAm:
      "እቅድ ማውጣት፣ ተግባራዊ ማድረግ፣ ድጋፍ እና ስራ ማስጀመርን በማዋሃድ እያንዳንዱ ፕሮጀክት በትክክለኛ እና ዘላቂ ዋጋ ሆኖ እንዲደርስ መፍትሄዎችን እናቀርባለን።",
  },
  {
    icon: "lni lni-shortcode",
    title: "Smart Energy & Connected Systems",
    titleAm: "ስማርት ኢነርጂ እና የተገናኙ ስርዓቶች",
    text: "We design and deliver smart energy, automation, and connected infrastructure solutions that improve efficiency, resilience, and long-term performance.",
    textAm:
      "ስማርት ኢነርጂ፣ አውቶሜሽን እና የተገናኙ መሠረተ ልማት መፍትሄዎችን በንድፍ እና በአቅርቦት ወደ ቀጣይ የሥራ ውጤታማነት፣ ተቋቋሚነት እና የረዥም ጊዜ አፈጻጸም እንዲሄዱ እንረዳለን።",
  },
];

const newsItems = [
  {
    title: "How modern technology accelerates business growth",
    titleAm: "ዘመናዊ ቴክኖሎጂ ንግድ እድገትን እንዴት ያፋጥናል",
    image: "assets/images/blog/1.jpg",
    body: `Technology is no longer a support function—it is a growth engine. When organizations invest in reliable digital infrastructure, smart systems, and implementation support, they can respond faster to change and build stronger operations.

At YENOB Technologies plc, we work with organizations that want practical transformation backed by dependable delivery, modern tools, and measurable outcomes. From planning to execution, we help our clients turn ambitious ideas into functional solutions.

The strongest results come from combining clear strategy, expert execution, and long-term support. Businesses that prioritize these areas consistently improve efficiency, resilience, and customer confidence.

Looking ahead, connected platforms and intelligent systems will continue to reshape the way industries operate. YENOB Technologies is committed to staying ahead of that shift so our clients remain competitive and future-ready.`,
    bodyAm: `ቴክኖሎጂ አሁን የድጋፍ ተግባር አይደለም — የእድገት ሞተር ነው። ድርጅቶች አስተማማኝ ዲጂታል መሠረተ ልማት፣ ስማርት ስርዓቶች እና የአተገባበር ድጋፍ በመባለ መልኩ ሲገቡ፣ ለለውጥ በፍጥነት ምላሽ መስጠት እና ጠንካራ ሥራ ስርዓቶችን መገንባት ይችላሉ።

በየኖብ ቴክኖሎጂስ ፕሊሲ ውስጥ በግልጽ ለውጥ እና በአስተማማኝ አቅርቦት ጋር መላውን ስራ ለመቀየር የሚፈልጉ ድርጅቶች ጋር እንሰራለን። ከእቅድ እስከ ተግባር ድረስ፣ ታላቅ ሐሳቦችን ወደ ተግባራዊ መፍትሄዎች በመለወጥ ረዳታችን እናበረታታለን።

በጣም ጥሩ ውጤቶች ከግልጽ ስትራቴጂ፣ የሙያ ትግበራ እና የረዥም ጊዜ ድጋፍ አንድ ላይ በመሆን ይመጣሉ። እነዚህን ቦታዎች በቅድሚያ የሚመለከቱ ንግዶች በተሻለ ሁኔታ ውጤታማነት፣ ተቋቋሚነት እና የደንበኛ እምነትን ያሳድጋሉ።

ወደ ፊት ሲታይ፣ የተገናኙ መድረኮች እና ስማርት ስርዓቶች የኢንዱስትሪ ሥራ መንገድን በቀጣይ ይለውጣሉ። የኖብ ቴክኖሎጂስ ይህንን ለውጥ ከፊት ለፊት ለመቆም ቁርጠኛ ነው።`,
  },
  {
    title: "Why resilient systems matter for modern operations",
    titleAm: "ለዘመናዊ ሥራ ተቋቋሚ ስርዓቶች ለምን አስፈላጊ ናቸው",
    image: "assets/images/blog/2.jpg",
    body: `Reliable systems are the foundation of modern business performance. As organizations expand, the cost of downtime, poor connectivity, and inconsistent infrastructure becomes more visible and more expensive.

YENOB Technologies plc helps businesses strengthen that foundation with smart solutions, robust deployment, and dependable support. Whether the need is energy, connectivity, automation, or digital infrastructure, we build systems that stay stable and useful over time.

A strong technology strategy does more than reduce risk—it creates room for growth, improves service quality, and supports better decision-making. That is why we focus on practical delivery and measurable impact.

Investing in resilient systems today gives companies a stronger platform for the future and a more confident path to scale.`,
    bodyAm: `አስተማማኝ ስርዓቶች ዘመናዊ የንግድ አፈጻጸም መሰረት ናቸው። ድርጅቶች ሲያድጉ የመቋረጥ ወጪ፣ ደካማ ግንኙነት እና ያልተረጋጋ መሠረተ ልማት በመቀያየር ይበልጥ ይታያል እና ይበልጥ ውድ ይሆናል።

የኖብ ቴክኖሎጂስ ፕሊሲ ይህንን መሠረት ከስማርት መፍትሄዎች፣ ጠንካራ አተገባበር እና አስተማማኝ ድጋፍ ጋር ለማጠናከር ይረዳል። በኢነርጂ፣ በግንኙነት፣ በአውቶሜሽን ወይም በዲጂታል መሠረተ ልማት አስፈላጊ ከሆነ እነሆ እንደገና የሚጠናከሩ ስርዓቶችን እናስበርታለን።

ጠንካራ የቴክኖሎጂ ስትራቴጂ አደጋን ማቃለል ብቻ አይደለም — እድገትን የሚያስተዋውቅ፣ የአገልግሎት ጥራትን የሚያሻሽል እና የተሻለ ውሳኔ ማድረግን የሚደግፍ መድረክ ይፈጥራል። ስለዚህ እኛ በተግባራዊ አተገባበር እና በሚታወቅ ውጤት ላይ እናተኩራለን።

ዛሬ ተቋቋሚ ስርዓቶችን በመለማመድ የድርጅቶች የወደፊት መሠረት ይጠናከራል እና ለመወዳደር የበለጠ ተስፋ ሰጪ መንገድ ይፈጥራል።`,
  },
  {
    title: "Reliable delivery is the real difference",
    titleAm: "አስተማማኝ አቅርቦት በእውነተኛ ልዩነት ነው",
    image: "assets/images/blog/4.jpg",
    body: `Great ideas only create value when they are delivered well. That is why implementation quality, communication, and post-delivery support matter as much as the technology itself.

YENOB Technologies plc was built around that principle. We provide practical solutions that are designed for real operations, with careful delivery and long-term support that keeps systems performing after launch.

After handover, our support does not stop. We stay connected with our clients to address operational questions, adapt to change, and help maintain dependable performance over time.

Whether you are planning a new rollout or upgrading existing infrastructure, YENOB Technologies brings the expertise and support needed to deliver the right result at the right time.`,
    bodyAm: `ታላላቅ ሐሳቦች በጥሩ ሁኔታ ሲደርሱ ብቻ ዋጋ ይፈጥራሉ። ስለዚህ የአተገባበር ጥራት፣ የግንኙነት ቅልጥፍና እና ከአቅርቦት በኋላ የሚመጣው ድጋፍ እንዲሁ ቴክኖሎጂ ጋር እኩል አስፈላጊ ናቸው።

የኖብ ቴክኖሎጂስ ፕሊሲ ይህን መርህ አስታውሶ ተቋቁሟል። እውነተኛ ሥራ ስርዓቶችን ለማሟላት ተግባራዊ መፍትሄዎችን እናቀርባለን፣ በትክክለኛ አቅርቦት እና ከሥራ አስጀምር በኋላ ስርዓቶቹ እንዲቀጥሉ ተገቢ ድጋፍ እንሰጣለን።

ከአቅርቦት በኋላ ድጋፋችን አያቆምም። ከደንበኞቻችን ጋር በመቀጠል የሥራ ጥያቄዎችን ለመፍታት፣ ለለውጥ ምላሽ መስጠት እና በጊዜ ሂደት አስተማማኝ አፈጻጸም እንዲቀጥል እንረዳለን።

አዲስ አቅርቦት እያቀዱ ወይም ነባር መሠረተ ልማት እያሻሻሉ ቢሆኑ፣ የኖብ ቴክኖሎጂስ በትክክለኛ ጊዜ እና በትክክለኛ ውጤት ለማድረስ ያስፈልገውን እውቀት እና ድጋፍ ያቀርባል።`,
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
                <img src="assets/images/logo-yenob.svg" alt="YENOB Technologies plc" />
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
              <img src="assets/images/logo-yenob.svg" alt="YENOB Technologies plc" />
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
                data-en="Empowering Growth With Technology & Innovation"
                data-am="እድገትን በቴክኖሎጂ እና በፈጠራ ማብቃት"
              >
                Empowering Growth With Technology & Innovation
              </h1>
              <p
                data-en="Delivering dependable digital solutions, smart systems, and implementation support for businesses that want to grow with confidence."
                data-am="ለንግድ ሥራዎች በእርግጠኝነት የሚያድጉ ዲጂታል መፍትሄዎችን፣ ስማርት ስርዓቶችን እና የአተገባበር ድጋፍን በመስጠት መስራታችን።"
              >
                Delivering dependable digital solutions, smart systems, and
                implementation support for businesses that want to grow with
                confidence.
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
                data-en="Driven by excellence, YENOB Technologies connects industries with practical innovation, reliable delivery, and future-ready technology."
                data-am="በላቀ ደረጃ የሚመራ የኖብ ቴክኖሎጂስ ኢንዱስትሪዎችን ተግባራዊ ፈጠራ፣ አስተማማኝ አቅርቦት እና ወደፊት የሚዘጋጁ ቴክኖሎጂዎች ጋር ያገናኛል።"
              >
                Driven by excellence, YENOB Technologies connects industries
                with practical innovation, reliable delivery, and future-ready
                technology.
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
                      data-en="To become a globally trusted technology partner that helps businesses grow through innovation, dependable delivery, and lasting impact."
                      data-am="በዓለም አቀፍ ደረጃ ታመነ የቴክኖሎጂ አጋር ሆኖ በፈጠራ፣ በአስተማማኝ አቅርቦት እና በዘላቂ ተጽእኖ ንግዶችን እንዲያሳድጉ መስራት።"
                    >
                      To become a globally trusted technology partner that helps
                      businesses grow through innovation, dependable delivery,
                      and lasting impact.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-vision"
                    role="tabpanel"
                    aria-labelledby="nav-vision-tab"
                  >
                    <p
                      data-en="To deliver reliable technology solutions and services that empower organizations, strengthen operations, and support long-term progress."
                      data-am="ድርጅቶችን እንበረታታለን፣ ሥራ አፈጻጸምን እናጠናክራለን እና የረዥም ጊዜ እድገትን የሚደግፉ አስተማማኝ ቴክኖሎጂ መፍትሄዎች እና አገልግሎቶች መስጠት።"
                    >
                      To deliver reliable technology solutions and services that
                      empower organizations, strengthen operations, and support
                      long-term progress.
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
                  data-en="Empowering businesses with practical technology, dependable delivery, and future-ready solutions."
                  data-am="ንግዶችን ተግባራዊ ቴክኖሎጂ፣ አስተማማኝ አቅርቦት እና ወደፊት የሚዘጋጁ መፍትሄዎች ጋር ማብቃት።"
                >
                  Empowering businesses with practical technology, dependable
                  delivery, and future-ready solutions.
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
                data-en="We love to build practical solutions for your business"
                data-am="ለንግድዎ ተግባራዊ መፍትሄዎችን መስራት እንወዳለን።"
              >
                We love to build practical <br />
                solutions for your business
              </h2>
              <p
                data-en="Partner with us for dependable technology delivery, smart systems, and implementation support tailored to your growth."
                data-am="ለእድገትዎ ተብለው በተዘጋጁ አስተማማኝ ቴክኖሎጂ አቅርቦት፣ ስማርት ስርዓቶች እና የአተገባበር ድጋፍ ከእኛ ጋር አጋር ይሁኑ።"
              >
                Partner with us for dependable technology delivery, smart
                systems, and implementation support tailored to your growth.
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
                        data-en="Sat 9AM - 1PM, Sun Closed"
                        data-am="ቅዳሜ 9 ሰዓት - 1 ሰዓት፣ እሁድ ዝግ"
                      >
                        Sat 9AM - 1PM, Sun Closed
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
                      src="assets/images/logo-yenob.svg"
                    alt="YENOB Technologies plc"
                    className="me-2"
                  />
                  <div>
                    <h4
                      className="mb-0"
                      data-en="YENOB Technologies"
                      data-am="የኖብ ቴክኖሎጂስ"
                    >
                      YENOB Technologies
                    </h4>
                  </div>
                </a>
                <p
                  className="mt-3"
                  data-en="YENOB Technologies plc specializes in delivering practical technology solutions, digital infrastructure, and implementation support that help organizations grow with confidence."
                  data-am="የኖብ ቴክኖሎጂስ ፕሊሲ ተግባራዊ ቴክኖሎጂ መፍትሄዎችን፣ ዲጂታል መሠረተ ልማትን እና የአተገባበር ድጋፍን በመስጠት ድርጅቶች በእርግጠኝነት እንዲያድጉ ይረዳል።"
                >
                  YENOB Technologies plc specializes in delivering practical
                  technology solutions, digital infrastructure, and
                  implementation support that help organizations grow with
                  confidence.
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
                    data-en="Sat 9AM - 1PM, Sun Closed"
                    data-am="ቅዳሜ 9 ሰዓት - 1 ሰዓት፣ እሁድ ዝግ"
                  >
                    <i className="lni lni-alarm-clock"></i> Sat 9AM - 1PM, Sun Closed
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
                      href="https://facebook.com/yenobtechnologies"
                      aria-label="Facebook"
                    >
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/yenobtechnologies" aria-label="X">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/yenobtechnologies"
                      aria-label="Instagram"
                    >
                      <i className="lni lni-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/company/yenob-technologies"
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
                    <i className="lni lni-envelope"></i> info@yenobtechnologies.com
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
            data-en='Copyright © 2026 YENOB Technologies plc — Developed by <a href="https://solportifolio.vercel.app/">Solomon Adugna</a>'
            data-am='የቅጂ መብት © 2026 የኖብ ቴክኖሎጂስ ፕሊሲ — በ <a href="https://solportifolio.vercel.app/">ሰለሞን አዱኛ</a> የተገነባ'
          >
            Copyright © 2026 YENOB Technologies plc — Developed by{" "}
            <a href="https://solportifolio.vercel.app/">Solomon Adugna</a>
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
          aria-label="Open YENOB Technologies assistant"
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
                <h3 data-en="YENOB Assistant" data-am="የየኖብ ረዳት">
                  YENOB Assistant
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
              data-en="Hello, I am the YENOB assistant. Tell me what you need, and I will point you to the right service or contact option."
              data-am="ሰላም፣ እኔ የየኖብ ረዳት ነኝ። ምን እንደሚፈልጉ ይንገሩኝ፣ እና ወደ ትክክለኛው አገልግሎት ወይም የግንኙነት አማራጭ እመራዎታለሁ።"
            >
              Hello, I am the YENOB assistant. Tell me what you need, and I will
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
