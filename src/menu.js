// createmenupage.js
// Generates menu page with styling

import "./style.css";

const createMenuListing = (heading, desc, price) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");

  const title = document.createElement("h2");
  title.textContent = heading;

  const description = document.createElement("p");
  description.textContent = desc;

  const itemCost = document.createElement("p");
  itemCost.textContent = price;

  itemContainer.appendChild(title);
  itemContainer.appendChild(description);
  itemContainer.appendChild(itemCost);

  return itemContainer;
};

const getMenuPage = () => {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const brownBeans = createMenuListing(
    "brown beans",
    "scrumptious brown beans and onions served with corn bread",
   21
  );
  const catfishDinner = createMenuListing(
    "catfish dinner",
    "blackened catfish fillet served with cole slaw",
    10
  );
  const ribTipsDinner = createMenuListing(
    "rib tips dinner",
    "a pile of pork rib tips, tossed in BBQ sauce. Smoked or fried.",
    34
  );

  menuContainer.appendChild(brownBeans);
  menuContainer.appendChild(ribTipsDinner);
  menuContainer.appendChild(catfishDinner);
  return menuContainer;
};

export default getMenuPage;
