// This module creates and returns all front
// page node elements
import "../src/style.css";

import HeroPng from "../src/big-mama-background.png";
const siteContainer = document.querySelector(".site-container");

const createNavElements = () => {
  const navBar = document.createElement("nav");
  navBar.className = "nav-container";
  navBar.textContent = "This is the nav bar";
  return navBar;
};

const createHeroElements = () => {
  const heroImage = new Image();
  heroImage.src = HeroPng;
  heroImage.className = "hero-img";

  const heroContainer = document.createElement("main");
  heroContainer.className = "hero-container";

  const heroTitle = document.createElement("h1");
  heroTitle.className = "hero-title";
  heroTitle.textContent = "BIG MAMA T's Cafe";

  const heroCopyHeading = document.createElement("h2");
  heroCopyHeading.className = "hero-copy-heading";
  heroCopyHeading.textContent = "Soulful.Original.Timeless.";

  const heroTitleContainer = document.createElement("div");
  heroTitleContainer.className = "hero-title-container";

  heroTitleContainer.appendChild(heroTitle);
  heroTitleContainer.appendChild(heroCopyHeading);

  const heroCopyContainer = document.createElement("div");
  heroCopyContainer.className = "hero-copy-container";
  heroCopyContainer.textContent =
    "Folks all over the south line up for our Gospel Fried Chicken, Memphis Star Black Eyed Peas, and a big hunk of Brown Sugar Sweet Potato Pie.";

  heroContainer.appendChild(heroTitleContainer);
  heroContainer.appendChild(heroCopyContainer);

  return heroContainer;
};

const createFooterElements = () => {
  const footerContainer = document.createElement("footer");
  footerContainer.className = "footer-container";

  const footerText = document.createElement("p");
  footerText.className = "footer-text";
  footerText.textContent = "This is the footer";

  footerContainer.appendChild(footerText);

  return footerContainer;
};

const loadPage = () => {
  const nav = createNavElements();
  const hero = createHeroElements();
  const footer = createFooterElements();

  siteContainer.appendChild(nav);
  siteContainer.appendChild(hero);

  document.body.appendChild(siteContainer);
  document.body.appendChild(footer);
};

export default loadPage;
