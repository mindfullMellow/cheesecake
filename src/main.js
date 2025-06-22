"use strict";
import { root } from "postcss";
import "tailwindcss/tailwind.css";
import "./style.css";

// get current year
const currentYear = new Date().getFullYear();
const year = document.querySelector("#year");
year.textContent = currentYear;

/////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Prevent default ONLY for in-page scrolling links
    if (href.startsWith("#")) {
      e.preventDefault();

      // Scroll to top if href is "#"
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Scroll to specific section
        const sectionEl = document.querySelector(href);
        if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile navigation
    if (link.classList.contains("item"))
      NavHeaderEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const NavHeader = document.querySelector(".nav-header");
console.log(sectionHeroEl);

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }

    // close the nav-open when user leaves it visible section
    if (
      ent.isIntersecting === false &&
      NavHeader.classList.contains("nav-open")
    ) {
      NavHeader.classList.remove("nav-open");
    }
  },

  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

/////////////////////////////////////////
//implementing the modal window with DOM
const errorModal = document.querySelector(".error-modal");
const modalContent = document.querySelector(".error-modal .modal-content");
const correctModal = document.querySelector(".correct-modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnCloseError = document.querySelector(".error-close-modal");
const form = document.querySelector("form");
const input = form.querySelector("input");

//storing functions
function closeModal(modal) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.classList.add("sticky");
}

//////////////////////////////////////
//1ST MODAL (correct-Modal)
// show the correct-modal if a certain condition is filled
btnShowModal.addEventListener("click", (e) => {
  // stop form submission
  e.preventDefault();

  //make sure the form is filled first
  if (input.value.trim() === "") {
    errorModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.classList.remove("sticky");
    return;
  } else {
    correctModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.classList.remove("sticky");
  }
});

//close/ remove the correct modal
btnCloseModal.addEventListener("click", function () {
  closeModal(correctModal);
  location.reload();
});

// close / remove the error modal
btnCloseError.addEventListener("click", function () {
  closeModal(errorModal);
});

///////////////////////////////////////
//adding akeyboard event
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !correctModal.classList.contains("hidden")) {
    closeModal(correctModal);
    location.reload();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !errorModal.classList.contains("hidden")) {
    closeModal(errorModal);
  }
});

////////////////////////////////////////////////////////////////
//Make mobile Navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const NavHeaderEl = document.querySelector(".nav-header");

btnNavEl.addEventListener("click", function () {
  NavHeaderEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////////////////////
//highlighting nav links as uusers scroll
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
