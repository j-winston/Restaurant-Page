// loadpage.js
// Generates basic page structure

import "./style.css";

import HeroPng from "../src/big-mama-background.png";
const siteContainer = document.querySelector(".site-container");

const createNavLink = (linkTitle, className) => {
  const link = document.createElement("a");
  link.textContent = linkTitle;
  link.className = className;

  return link;
};

const createNavTabs = () => {
  const navContainer = document.createElement("nav");

  navContainer.className = "nav-container";

  navContainer.appendChild(createNavLink("Menu", "menu-tab"));
  navContainer.appendChild(createNavLink("contact", "contact-tab"));

  return navContainer;
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

  const heroCopy = document.createElement("p");
  heroCopy.className = "hero-copy";
  heroCopy.textContent =
    "Folks all over the south line up for our Gospel Fried Chicken, Memphis Star Black Eyed Peas, and a big hunk of Brown Sugar Sweet Potato Pie.";

  heroCopyContainer.appendChild(heroCopy);

  heroContainer.appendChild(heroTitleContainer);
  heroContainer.appendChild(heroCopyContainer);

  return heroContainer;
};

const createFooterElements = () => {
  const footerContainer = document.createElement("footer");
  footerContainer.className = "footer-container";

  const footerText = document.createElement("p");
  footerText.className = "footer-text";
  footerText.textContent = "In honor of Big Mama Thornton, whom without, rock and roll would not exist.";

    const copyright = document.createElement('p');
    copyright.textContent = '2023 James Winston'
     copyright.className = 'footer-text'


  footerContainer.appendChild(footerText);
    footerContainer.appendChild(copyright);

  return footerContainer;
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

export default loadPage;
