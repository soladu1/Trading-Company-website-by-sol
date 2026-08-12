(function () {
  "use strict";

  var agent = document.getElementById("aiAgent");
  var toggle = document.getElementById("aiAgentToggle");
  var closeButton = document.getElementById("aiAgentClose");
  var clearButton = document.getElementById("aiAgentClear");
  var clearWideButton = document.getElementById("aiAgentClearWide");
  var messages = document.getElementById("aiAgentMessages");
  var form = document.getElementById("aiAgentForm");
  var input = document.getElementById("aiAgentInput");
  var suggestions = document.querySelectorAll(".ai-agent-suggestions button");

  if (!agent || !toggle || !messages || !form || !input) {
    return;
  }

  var company = {
    phone: "+251-930-00-04-77",
    officePhone: "+251-116-72-48-88",
    email: "info@yenobtechnologies.com",
    address: "4th Floor, Morning Star Mall, Cameroon St, Addis Ababa, Ethiopia",
    hours: "Mon - Fri 9AM - 5PM, Sat - Sun 9AM - 1PM",
  };

  var welcomeMessage = "Hello, I am the YENOB assistant. Tell me what you need, and I will point you to the right service or contact option.";

  var responses = [
    {
      terms: ["machinery", "machine", "installation", "commissioning", "equipment"],
      text: "YENOB Technologies supplies industrial technology solutions and supports implementation and commissioning. Share the system type, capacity, quantity, delivery location, and timeline so the team can prepare the right response.",
    },
    {
      terms: ["solar", "electrical", "generator", "transformer", "cable", "battery", "lantern", "panel"],
      text: "For electrical and digital infrastructure needs, YENOB Technologies can help with smart energy systems, automation hardware, network solutions, and dependable implementation support.",
    },
    {
      terms: ["raw", "material", "finished", "plastic", "pipe", "food", "agro", "petrochemical"],
      text: "YENOB Technologies delivers technology products and integrated solutions tailored to modern industries.",
    },
    {
      terms: ["quote", "price", "cost", "proposal", "rfq", "request"],
      text: "To request a quote, include your project need, quantity, specifications, delivery destination, timeline, company name, and phone or email. You can send it through the contact form or email YENOB Technologies directly.",
      action: "contact",
    },
    {
      terms: ["contact", "phone", "email", "call", "reach"],
      text: "You can contact YENOB Technologies at " + company.phone + " or " + company.officePhone + ". Email: " + company.email + ".",
      action: "contact",
    },
    {
      terms: ["address", "location", "office", "map", "where"],
      text: "YENOB Technologies is located at " + company.address + ". The map section near the bottom of the page shows the office location.",
      action: "map",
    },
    {
      terms: ["hour", "open", "time", "available", "working"],
      text: "Opening hours are " + company.hours + ".",
    },
    {
      terms: ["service", "services", "what do you do", "company"],
      text: "YENOB Technologies supports industries through smart technology solutions, digital infrastructure, integrated systems, and dependable implementation services.",
      action: "services",
    },
  ];

  function setOpen(isOpen) {
    agent.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    if (isOpen) {
      window.setTimeout(function () {
        input.focus();
      }, 120);
    }
  }

  function addMessage(text, sender) {
    var bubble = document.createElement("div");
    bubble.className = "ai-message ai-message-" + sender;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  function clearMessages() {
    messages.innerHTML = "";
    addMessage(welcomeMessage, "bot");
    input.value = "";
    input.focus();
  }

  function showTyping(callback) {
    var typing = document.createElement("div");
    typing.className = "ai-message ai-message-bot ai-message-typing";
    typing.textContent = "Typing...";
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    window.setTimeout(function () {
      typing.remove();
      callback();
    }, 450);
  }

  function findResponse(question) {
    var normalized = question.toLowerCase();

    for (var i = 0; i < responses.length; i++) {
      var match = responses[i].terms.some(function (term) {
        return normalized.indexOf(term) !== -1;
      });

      if (match) {
        return responses[i];
      }
    }

    return {
      text: "I can help with YENOB Technologies services, technology solutions, implementation support, quote requests, location, hours, and contact details. Please tell me what product or service you need.",
    };
  }

  function scrollToSection(id) {
    var section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function fillContactMessage(question) {
    var subject = document.querySelector('input[name="subject"]');
    var message = document.getElementById("message");

    if (subject && !subject.value) {
      subject.value = "Inquiry from website AI assistant";
    }

    if (message && !message.value) {
      message.value = "Hello YENOB Technologies plc,\n\nI need assistance with: " + question + "\n\nPlease contact me with more information.";
    }
  }

  function handleAction(action, question) {
    if (action === "contact") {
      fillContactMessage(question);
      scrollToSection("contact");
    }

    if (action === "services") {
      scrollToSection("services");
    }

    if (action === "map") {
      var map = document.querySelector(".map-section");
      if (map) {
        map.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function ask(question) {
    var trimmed = question.trim();

    if (!trimmed) {
      return;
    }

    addMessage(trimmed, "user");
    input.value = "";

    showTyping(function () {
      var answer = findResponse(trimmed);
      addMessage(answer.text, "bot");
      handleAction(answer.action, trimmed);
    });
  }

  toggle.addEventListener("click", function () {
    setOpen(!agent.classList.contains("is-open"));
  });

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      setOpen(false);
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", clearMessages);
  }

  if (clearWideButton) {
    clearWideButton.addEventListener("click", clearMessages);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    ask(input.value);
  });

  suggestions.forEach(function (button) {
    button.addEventListener("click", function () {
      ask(button.getAttribute("data-prompt"));
    });
  });
})();
