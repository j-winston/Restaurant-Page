// index.js

import { getHomePage, loadPage } from "./loadpage.js";
import getMenuPage from "./menu.js";
import getHoursLocationPage from "./hours-location.js";

const erase = (element) => {
  element.textContent = "";
};

loadPage();

// Switch pages when user clicks link
const menuTab = document.querySelector(".menu-tab");
const hoursTab = document.querySelector(".hours-tab");
const homeTab = document.querySelector(".home-tab");

const heroContainer = document.querySelector(".hero-container");

menuTab.addEventListener("click", () => {
  erase(heroContainer);
  heroContainer.appendChild(getMenuPage());
});

hoursTab.addEventListener("click", () => {
  erase(heroContainer);
  heroContainer.appendChild(getHoursLocationPage());
});

homeTab.addEventListener("click", () => {
  erase(heroContainer);
  heroContainer.appendChild(getHomePage());
});
