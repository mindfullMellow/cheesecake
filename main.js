"use strict";
import "tailwindcss/tailwind.css";

// get current year
const currentYear = new Date().getFullYear();
const year = document.querySelector("#year");
year.textContent = currentYear;
