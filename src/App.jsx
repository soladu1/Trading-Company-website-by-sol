import { useEffect } from "react";
import PageSections from "./components/PageSections";
import "./react-overrides.css";

const company = {
  name: "YENOB Technologies plc",
  phone: "+251-930-00-04-77",
  officePhone: "+251-116-72-48-88",
  email: "info@yenobtechnologies.com",
  address: "4th Floor, Morning Star Mall, Cameroon St, Addis Ababa, Ethiopia",
  hours: "Mon - Fri 9AM - 5PM, Sat 9AM - 1PM, Sun Closed",
};

const welcomeMessage =
  "Hello, I am the YENOB Technologies assistant. Tell me what you need, and I will point you to the right service or contact option.";

const responses = [
  {
    terms: [
      "machinery",
      "machine",
      "installation",
      "commissioning",
      "equipment",
    ],
    text: "YENOB Technologies supplies industrial technology solutions and supports implementation and commissioning. Share the system type, capacity, quantity, delivery location, and timeline so the team can prepare the right response.",
  },
  {
    terms: [
      "solar",
      "electrical",
      "generator",
      "transformer",
      "cable",
      "battery",
      "lantern",
      "panel",
      "ev",
      "charging",
      "charger",
      "vehicle",
    ],
    text: "For electrical, solar, and digital infrastructure needs, YENOB Technologies provides smart energy systems, automation hardware, and connected solutions—complete with supply, installation, testing, and commissioning.",
  },
  {
    terms: [
      "raw",
      "material",
      "finished",
      "plastic",
      "pipe",
      "food",
      "agro",
      "petrochemical",
    ],
    text: "YENOB Technologies delivers technology products and integrated solutions tailored to modern industries, including digital infrastructure, smart systems, and operational support.",
  },
  {
    terms: ["quote", "price", "cost", "proposal", "rfq", "request"],
    text: "To request a quote, include your project need, quantity, specifications, delivery destination, timeline, company name, and phone or email. You can send it through the contact form or email YENOB Technologies directly.",
    action: "contact",
  },
  {
    terms: ["contact", "phone", "email", "call", "reach"],
    text: `You can contact YENOB Technologies at ${company.phone} or ${company.officePhone}. Email: ${company.email}.`,
    action: "contact",
  },
  {
    terms: ["address", "location", "office", "map", "where"],
    text: `YENOB Technologies is located at ${company.address}. The map section near the bottom of the page shows the office location.`,
    action: "map",
  },
  {
    terms: ["hour", "open", "time", "available", "working"],
    text: `Opening hours are ${company.hours}.`,
  },
  {
    terms: ["service", "services", "what do you do", "company"],
    text: "YENOB Technologies supports industries through smart technology solutions, digital infrastructure, integrated systems, and dependable implementation services.",
    action: "services",
  },
];

function useTemplateInteractions() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar-area");
    const scrollTopButton = document.querySelector(".scroll-top");
    const navLinks = Array.from(document.querySelectorAll(".page-scroll"));

    const handleScroll = () => {
      if (navbar) {
        navbar.classList.toggle(
          "sticky",
          window.pageYOffset > navbar.offsetTop,
        );
      }

      if (scrollTopButton) {
        const isVisible =
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50;
        scrollTopButton.style.display = isVisible ? "flex" : "none";
      }

      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      navLinks.forEach((link) => {
        const selector = link.getAttribute("href");
        const section = selector ? document.querySelector(selector) : null;

        if (!section) {
          return;
        }

        const isActive =
          section.offsetTop <= scrollPos + 73 &&
          section.offsetTop + section.offsetHeight > scrollPos + 73;
        link.classList.toggle("active", isActive);
      });
    };

    const handlePageLinkClick = (event) => {
      const selector = event.currentTarget.getAttribute("href");
      const section = selector ? document.querySelector(selector) : null;

      if (section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    navLinks.forEach((link) =>
      link.addEventListener("click", handlePageLinkClick),
    );
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handlePageLinkClick),
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

function useSidebar() {
  useEffect(() => {
    const toggler = document.querySelector(".navbar-nine .navbar-toggler");
    const sidebar = document.querySelector(".sidebar-left");
    const overlay = document.querySelector(".overlay-left");
    const closeButton = document.querySelector(".sidebar-close .close");
    const menuButton = document.querySelector(".navbar-nine .menu-bar");

    const toggleNavbar = () => toggler?.classList.toggle("active");
    const openSidebar = (event) => {
      event?.preventDefault();
      sidebar?.classList.add("open");
      overlay?.classList.add("open");
    };
    const closeSidebar = (event) => {
      event?.preventDefault();
      sidebar?.classList.remove("open");
      overlay?.classList.remove("open");
    };

    toggler?.addEventListener("click", toggleNavbar);
    menuButton?.addEventListener("click", openSidebar);
    closeButton?.addEventListener("click", closeSidebar);
    overlay?.addEventListener("click", closeSidebar);

    return () => {
      toggler?.removeEventListener("click", toggleNavbar);
      menuButton?.removeEventListener("click", openSidebar);
      closeButton?.removeEventListener("click", closeSidebar);
      overlay?.removeEventListener("click", closeSidebar);
    };
  }, []);
}

function useLanguageSwitcher() {
  useEffect(() => {
    const changeLanguage = (lang) => {
      document.querySelectorAll("[data-en]").forEach((element) => {
        const translation = element.getAttribute(`data-${lang}`);

        if (translation) {
          element.innerHTML = translation;
        }
      });

      document.querySelectorAll("[data-en-placeholder]").forEach((element) => {
        const placeholder = element.getAttribute(`data-${lang}-placeholder`);

        if (placeholder) {
          element.setAttribute("placeholder", placeholder);
        }
      });

      document
        .querySelectorAll(".ai-agent-suggestions button")
        .forEach((button) => {
          if (lang === "am") {
            button.setAttribute(
              "data-prompt",
              `እባክዎን ስለ ${button.getAttribute("data-am")} መረጃ ይስጡኝ`,
            );
          } else {
            button.setAttribute(
              "data-prompt",
              `I need information about ${button.getAttribute("data-en")}`,
            );
          }
        });

      const switcher = document.getElementById("langSwitcher");

      if (switcher) {
        switcher.innerHTML = `<i class="lni lni-world"></i> ${lang === "am" ? "AM" : "EN"}`;
      }

      document.body.style.fontFamily =
        lang === "am"
          ? "'Noto Sans Ethiopic', 'Plus Jakarta Sans', sans-serif"
          : "";
    };

    const englishButton = document.querySelector(
      "[onclick=\"changeLanguage('en')\"]",
    );
    const amharicButton = document.querySelector(
      "[onclick=\"changeLanguage('am')\"]",
    );
    const handleEnglishClick = (event) => {
      event.preventDefault();
      changeLanguage("en");
    };
    const handleAmharicClick = (event) => {
      event.preventDefault();
      changeLanguage("am");
    };

    window.changeLanguage = changeLanguage;
    englishButton?.addEventListener("click", handleEnglishClick);
    amharicButton?.addEventListener("click", handleAmharicClick);

    return () => {
      englishButton?.removeEventListener("click", handleEnglishClick);
      amharicButton?.removeEventListener("click", handleAmharicClick);
      delete window.changeLanguage;
    };
  }, []);
}

function useAiAssistant() {
  useEffect(() => {
    const agent = document.getElementById("aiAgent");
    const toggle = document.getElementById("aiAgentToggle");
    const closeButton = document.getElementById("aiAgentClose");
    const clearButton = document.getElementById("aiAgentClear");
    const clearWideButton = document.getElementById("aiAgentClearWide");
    const messages = document.getElementById("aiAgentMessages");
    const form = document.getElementById("aiAgentForm");
    const input = document.getElementById("aiAgentInput");
    const suggestions = Array.from(
      document.querySelectorAll(".ai-agent-suggestions button"),
    );

    if (!agent || !toggle || !messages || !form || !input) {
      return undefined;
    }

    const setOpen = (isOpen) => {
      agent.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

      if (isOpen) {
        window.setTimeout(() => input.focus(), 120);
      }
    };

    const addMessage = (text, sender) => {
      const bubble = document.createElement("div");
      bubble.className = `ai-message ai-message-${sender}`;
      bubble.textContent = text;
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    };

    const clearMessages = () => {
      messages.innerHTML = "";
      addMessage(welcomeMessage, "bot");
      input.value = "";
      input.focus();
    };

    const findResponse = (question) => {
      const normalized = question.toLowerCase();

      return (
        responses.find((response) =>
          response.terms.some((term) => normalized.includes(term)),
        ) || {
          text: "I can help with YENOB Technologies services, technology solutions, implementation support, quote requests, location, hours, and contact details. Please tell me what product or service you need.",
        }
      );
    };

    const scrollToSection = (id) => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const fillContactMessage = (question) => {
      const subject = document.querySelector('input[name="subject"]');
      const message = document.getElementById("message");

      if (subject && !subject.value) {
        subject.value = "Inquiry from website AI assistant";
      }

      if (message && !message.value) {
        message.value = `Hello YENOB Technologies plc,\n\nI need assistance with: ${question}\n\nPlease contact me with more information.`;
      }
    };

    const handleAction = (action, question) => {
      if (action === "contact") {
        fillContactMessage(question);
        scrollToSection("contact");
      }

      if (action === "services") {
        scrollToSection("services");
      }

      if (action === "map") {
        document
          .querySelector(".map-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const showTyping = (callback) => {
      const typing = document.createElement("div");
      typing.className = "ai-message ai-message-bot ai-message-typing";
      typing.textContent = "Typing...";
      messages.appendChild(typing);
      messages.scrollTop = messages.scrollHeight;

      window.setTimeout(() => {
        typing.remove();
        callback();
      }, 450);
    };

    const ask = (question) => {
      const trimmed = question.trim();

      if (!trimmed) {
        return;
      }

      addMessage(trimmed, "user");
      input.value = "";

      showTyping(() => {
        const answer = findResponse(trimmed);
        addMessage(answer.text, "bot");
        handleAction(answer.action, trimmed);
      });
    };

    const toggleAssistant = () => setOpen(!agent.classList.contains("is-open"));
    const closeAssistant = () => setOpen(false);
    const handleSubmit = (event) => {
      event.preventDefault();
      ask(input.value);
    };
    const handleSuggestionClick = (event) => {
      ask(event.currentTarget.getAttribute("data-prompt") || "");
    };

    toggle.addEventListener("click", toggleAssistant);
    closeButton?.addEventListener("click", closeAssistant);
    clearButton?.addEventListener("click", clearMessages);
    clearWideButton?.addEventListener("click", clearMessages);
    form.addEventListener("submit", handleSubmit);
    suggestions.forEach((button) =>
      button.addEventListener("click", handleSuggestionClick),
    );

    return () => {
      toggle.removeEventListener("click", toggleAssistant);
      closeButton?.removeEventListener("click", closeAssistant);
      clearButton?.removeEventListener("click", clearMessages);
      clearWideButton?.removeEventListener("click", clearMessages);
      form.removeEventListener("submit", handleSubmit);
      suggestions.forEach((button) =>
        button.removeEventListener("click", handleSuggestionClick),
      );
    };
  }, []);
}

function App() {
  useTemplateInteractions();
  useSidebar();
  useLanguageSwitcher();
  useAiAssistant();

  return <PageSections />;
}

export default App;
