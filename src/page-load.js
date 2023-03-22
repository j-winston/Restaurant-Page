// Load up initial page
import HeroImgFile from "../src/background-image.png";
const siteContentElem = document.getElementById("site-content");

const createNavElements = () => {
  const navSectionElem = document
    .createElement("section")
    .className("nav-section");
  const navBarElem = document.createElement("div").className("nav-bar");

  navSectionElem.appendChild(navBarElem);
  siteContentElem.appendChild(navSectionElem);
};

const createHeroElements = () => {
  const heroSectionElem = document
    .createElement("section")
    .className("hero-section");
  const heroContainerElem = document
    .createElement("div")
    .className("hero-container");
  const heroTitleElem = document.createElement("h1").className("hero-title");
  const heroImage = new Image();
  heroImage.src = HeroImgFile;
  const heroCopyHeadingElem = document
    .createElement("h2")
    .className("hero-copy-heading");
  const heroCopyElem = document.createElement("p").className("hero-copy");

  heroSectionElem.appendChild(heroSectionElem);
  heroContainerElem.appendChild(heroTitleElem);
  heroContainerElem.appendChild(heroCopyHeadingElem);
  heroContainerElem.appendChild(heroCopyElem);

  siteContentElem.appendChild(heroContainerElem);
};

const createFooterElements = () => {
  const footerSectionElem = document
    .createElement("section")
    .className("footer-section");
  const footerTextElem = document.createElement("p").className("footer-text");

  footerSectionElem.appendChild(footerTextElem);

  siteContentElem.appendChild(footerSectionElem);
};

export default pageLoad = () => {
  createNavElements();
  createHeroElements();
  createFooterElements();
};

