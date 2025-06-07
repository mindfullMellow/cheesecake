"use strict";
import { root } from "postcss";
import "tailwindcss/tailwind.css";

// get current year
const currentYear = new Date().getFullYear();
const year = document.querySelector("#year");
year.textContent = currentYear;

/////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a");

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
    if (link.classList.contains("item")) headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
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
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const form = document.querySelector("form");
const input = form.querySelector("input");

//creating functions to maintain the dry principle

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.classList.add("sticky");
  location.reload();
};

// using the functions created earlier
btnShowModal.addEventListener("click", (e) => {
  // stop form submission
  e.preventDefault();

  //make sure the form is filled first
  if (input.value.trim() === "") {
    alert("Please fill the form first!");
    return;
  }

  modal.classList.remove("hidden");
  nav.classList.remove("sticky");
});

btnCloseModal.addEventListener("click", closeModal);

///////////////////////////////////////
//adding akeyboard event
document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
