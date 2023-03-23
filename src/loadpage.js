// This module creates and returns all front
// page node elements

import HeroImgFile from "../src/big-mama-background.png";
const siteContent = document.getElementById("site-content");

const createNavElements = () => {
  const navSection = document.createElement("section");
  navSection.className = "nav-section";
  const navBar = document.createElement("div");
  navBar.className = "nav-bar";

  navSection.appendChild(navBar);
  siteContent.appendChild(navSection);
};

const createHeroElements = () => {
  const heroSection = document.createElement("section");
  heroSection.className = "hero-section";

  const heroContainer = document.createElement("div");
  heroContainer.className = "hero-container";

  const heroTitle = document.createElement("h1");
  heroTitle.className = "hero-title";

  const heroImage = new Image();
  heroImage.src = HeroImgFile;

  const heroCopyHeading = document.createElement("h2");
  heroCopyHeading.className = "hero-copy-heading";

  const heroCopy = document.createElement("p");
  heroCopy.className = "hero-copy";

  heroSection.appendChild(heroContainer);
  heroContainer.appendChild(heroTitle);
  heroContainer.appendChild(heroCopyHeading);
  heroContainer.appendChild(heroCopy);

  siteContent.appendChild(heroContainer);
};

const createFooterElements = () => {
  const footerSection = document.createElement("section");

  const footerText = document.createElement("p");
  footerText.className = "footer-text";

  footerSection.appendChild(footerText);

  siteContent.appendChild(footerSection);
};

const loadPage = () => {
  createNavElements();
  createHeroElements();
  createFooterElements();

  return siteContent;
};

export default loadPage;
