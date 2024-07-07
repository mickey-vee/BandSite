import BandSiteApi from "../scripts/band-site-api.js";

const apiKey = "f2db11a6-a4e5-44d7-b2f5-65ce233efbf8";
const api = new BandSiteApi(apiKey);

const formatDate = (date) => {
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yyyy = date.getFullYear();
  return mm + "/" + dd + "/" + yyyy;
};

async function showsApi() {
  try {
    const showData = await api.getShows();
    const shows = showData.map((show) => {
      const formattedDate = formatDate(new Date(show.date));
      return {
        showDate: formattedDate,
        showVenue: show.place,
        showLocation: show.location,
      };
    });
    return shows;
  } catch (e) {
    console.log(e);
  }
}

const showSection = document.querySelector(".shows");
const showWrapper = document.querySelector(".shows__wrapper");

/* function to create new element, add class name, add text and append */
const elementClassTextAppend = (element, className, text, parentElement) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.textContent = text;
  parentElement.appendChild(newElement);
};

/* function to create/display show section */
function apiShows(shows) {
  shows.forEach(function (show) {
    const showList = document.createElement("ul");
    showList.classList.add("shows__list");

    elementClassTextAppend("li", "shows__list-date", "DATE", showList);
    elementClassTextAppend(
      "li",
      "shows__list-date--text",
      show.showDate,
      showList
    );
    elementClassTextAppend("li", "shows__list-venue", "VENUE", showList);
    elementClassTextAppend("li", "shows__list--text", show.showVenue, showList);
    elementClassTextAppend("li", "shows__list-location", "LOCATION", showList);
    elementClassTextAppend(
      "li",
      "shows__list--text",
      show.showLocation,
      showList
    );
    elementClassTextAppend("button", "shows__button", "BUY TICKETS", showList);

    showWrapper.appendChild(showList);
  });
}

async function main() {
  try {
    const showArray = await showsApi();
    apiShows(showArray);
  } catch (e) {
    console.log(e);
  }
}

main();
