// index.js

import loadPage from "./loadpage.js";
import getMenuPage from "./menu.js";
import getHoursLocationPage from "./hours-location.js";

const erase = (element) => {
  element.textContent = "";
};

loadPage();

//Nav
const menuTab = document.querySelector(".menu-tab");
const contactTab = document.querySelector(".contact-tab");

const heroContainer = document.querySelector(".hero-container");

menuTab.addEventListener("click", () => {
  erase(heroContainer);
  heroContainer.appendChild(getMenuPage());
});

contactTab.addEventListener("click", () => {
  erase(heroContainer);
  heroContainer.appendChild(getHoursLocationPage());
});
