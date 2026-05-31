/* ==========================================
EMAILLOOM
SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  initTheme();
  initScrollReveal();
  initSmoothScroll();
  initStickyHeader();
  initTestimonials();
  initCaseStudies();
  initFAQ();
  initMobileMenu();
  initCalendlyButtons();
  initContactForm();

});

/* ==========================================
THEME TOGGLE
========================================== */

function initTheme() {

  const toggle =
    document.getElementById("themeToggle");

  const savedTheme =
    localStorage.getItem("emailloom-theme");

  if(savedTheme){

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );

  }

  if(!toggle) return;

  toggle.addEventListener("click", () => {

    const currentTheme =
      document.documentElement.getAttribute(
        "data-theme"
      );

    const newTheme =
      currentTheme === "dark"
      ? "light"
      : "dark";

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem(
      "emailloom-theme",
      newTheme
    );

  });

}

/* ==========================================
SMOOTH SCROLL
========================================== */

function initSmoothScroll() {

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

      anchor.addEventListener("click", function(e){

        const target =
          document.querySelector(
            this.getAttribute("href")
          );

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

      });

    });

}

/* ==========================================
STICKY HEADER
========================================== */

function initStickyHeader(){

  const header =
    document.querySelector(".header");

  if(!header) return;

  window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  });

}

/* ==========================================
SCROLL REVEAL
========================================== */

function initScrollReveal(){

  const elements =
    document.querySelectorAll(
      ".fade-up"
    );

  if(!elements.length) return;

  const observer =
    new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if(entry.isIntersecting){

          entry.target.classList.add(
            "active"
          );

        }

      });

    },{
      threshold:0.15
    });

  elements.forEach(el =>
    observer.observe(el)
  );

}

/* ==========================================
FAQ
========================================== */

function initFAQ(){

  const details =
    document.querySelectorAll(
      ".faq-container details"
    );

  details.forEach(item => {

    item.addEventListener("toggle", () => {

      if(item.open){

        details.forEach(other => {

          if(other !== item){

            other.removeAttribute(
              "open"
            );

          }

        });

      }

    });

  });

}

/* ==========================================
TESTIMONIALS
========================================== */

function initTestimonials(){

  const cards =
    document.querySelectorAll(
      ".testimonial-card"
    );

  if(cards.length < 2) return;

  let current = 0;

  cards.forEach((card,index)=>{

    if(index !== 0){

      card.style.display =
        "none";

    }

  });

  setInterval(()=>{

    cards[current].style.display =
      "none";

    current =
      (current + 1) % cards.length;

    cards[current].style.display =
      "block";

  },5000);

}

/* ==========================================
CASE STUDIES
========================================== */

function initCaseStudies(){

  const cards =
    document.querySelectorAll(
      ".case-card"
    );

  if(cards.length < 2) return;

  let current = 0;

  cards.forEach((card,index)=>{

    if(index > 2){

      card.style.display =
        "none";

    }

  });

  setInterval(()=>{

    cards.forEach(card => {

      card.style.display =
        "none";

    });

    current =
      (current + 1) %
      cards.length;

    cards[current].style.display =
      "block";

  },6000);

}

/* ==========================================
MOBILE MENU
========================================== */

function initMobileMenu(){

  const toggle =
    document.querySelector(
      ".mobile-toggle"
    );

  const nav =
    document.querySelector(
      ".nav"
    );

  if(!toggle || !nav) return;

  toggle.addEventListener("click",()=>{

    nav.classList.toggle(
      "mobile-open"
    );

  });

}

/* ==========================================
CALENDLY
========================================== */

function initCalendlyButtons(){

  const buttons =
    document.querySelectorAll(
      ".calendly-btn"
    );

  if(!buttons.length) return;

  buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

      if(window.Calendly){

        Calendly.initPopupWidget({
          url:
          "https://calendly.com/YOUR-CALENDLY-LINK"
        });

      }

    });

  });

}

/* ==========================================
EMAILJS
========================================== */

function initContactForm(){

  const form =
    document.querySelector(
      "#contactForm"
    );

  if(!form) return;

  form.addEventListener(
    "submit",
    function(e){

      e.preventDefault();

      emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      )

      .then(()=>{

        alert(
          "Message sent successfully."
        );

        form.reset();

      })

      .catch(error => {

        console.error(error);

        alert(
          "Something went wrong."
        );

      });

    }
  );

}

/* ==========================================
PERFORMANCE
========================================== */

window.addEventListener(
  "load",
  () => {

    document.body.classList.add(
      "loaded"
    );

  }
);

/* ==========================================
ANALYTICS HOOK
========================================== */

function trackEvent(
  category,
  action,
  label
){

  if(typeof gtag === "function"){

    gtag("event", action, {

      event_category:
        category,

      event_label:
        label

    });

  }

}