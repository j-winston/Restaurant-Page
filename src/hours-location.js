// hours-location.js
// Generates and returns hours and location 

import "./style.css";

const getHoursLocationPage = () => {
  const hoursLocation = document.createElement("div");
  const heading = document.createElement("h1");
  heading.textContent = "Hours and Location";

  const address = document.createElement("p");
  address.textContent = "212 SoulFood Ave, Jacksonville Mississippi";

  const hours = document.createElement("p");
  hours.textContent = "7am - 9pm";

  hoursLocation.appendChild(heading);
  hoursLocation.appendChild(address);
  hoursLocation.appendChild(hours);

  return hoursLocation;
};

export default getHoursLocationPage;
