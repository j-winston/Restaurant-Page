// loadpage.js
// Generates basic page structure

import "./style.css";

import HeroPng from "../src/big-mama-background.png";
const siteContainer = document.querySelector(".site-container");

const createNavLink = (linkTitle, className) => {
  const link = document.createElement("a");
  link.textContent = linkTitle.toUpperCase();
  link.className = className;
    link.classList.add('underline-animation')

  return link;
};

const createNavTabs = () => {
  const navContainer = document.createElement("nav");

  navContainer.className = "nav-container";

  navContainer.appendChild(createNavLink("home", "home-tab"));
  navContainer.appendChild(createNavLink("menu", "menu-tab"));
  navContainer.appendChild(createNavLink("hours + location", "hours-tab"));
  return navContainer;
};

const getHeroCopy = () => {
  const heroTitle = document.createElement("h1");
  heroTitle.className = "hero-title";
  heroTitle.textContent = "BIG MAMA";
  heroTitle.classList.add("x-large");

  const heroSubTitle = document.createElement("h1");
  heroSubTitle.className = "hero-title";
  heroSubTitle.textContent = "T's Cafe";

  const tagLine = document.createElement("h2");
  tagLine.textContent = "Soulful. Original. Timeless.";
  tagLine.className = "tagline";

  const heroTextContainer = document.createElement("div");
  heroTextContainer.className = "hero-text-container";
  heroTextContainer.appendChild(heroTitle);
  heroTextContainer.appendChild(heroSubTitle);
  heroTextContainer.appendChild(tagLine);

  return heroTextContainer;
};

const createHeroElements = () => {
  const heroImage = new Image();
  heroImage.src = HeroPng;
  heroImage.className = "hero-img";

  const heroContainer = document.createElement("main");
  heroContainer.className = "hero-container";

  const heroCopy = getHeroCopy();

  heroContainer.appendChild(heroCopy);

  return heroContainer;
};

const createFooterElements = () => {
  const footerContainer = document.createElement("footer");
  footerContainer.className = "footer-container";

  const footerText = document.createElement("p");
  footerText.className = "footer-text";
  footerText.textContent =
    "In honor of Big Mama Thornton, whom without, rock and roll would not exist.";

  const copyright = document.createElement("p");
  copyright.textContent = "2023 James Winston";
  copyright.className = "footer-text";

  footerContainer.appendChild(footerText);
  footerContainer.appendChild(copyright);

  return footerContainer;
};

const getHomePage = () => {
  return getHeroCopy();
};

const loadPage = () => {
  const nav = createNavTabs();
  const hero = createHeroElements();
  const footer = createFooterElements();

  siteContainer.appendChild(nav);
  siteContainer.appendChild(hero);

  document.body.appendChild(siteContainer);
  document.body.appendChild(footer);
};

export { getHomePage, loadPage };
