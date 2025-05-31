"use strict";
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
