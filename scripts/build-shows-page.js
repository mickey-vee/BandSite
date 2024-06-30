const showArray = [
  {
    showDate: "Mon Sept 09 2024",
    showVenue: "Ronald Lane ",
    showLocation: "San Francisco, CA",
  },
  {
    showDate: "Tue Sept 17 2024",
    showVenue: "Pier 3 East",
    showLocation: "San Francisco, CA",
  },
  {
    showDate: "Sat Oct 12 2024",
    showVenue: "View Lounge",
    showLocation: "San Francisco, CA",
  },
  {
    showDate: "Sat Nov 16 2024",
    showVenue: "Hyatt Agency",
    showLocation: "San Francisco, CA",
  },
  {
    showDate: "Fri Nov 29 2024",
    showVenue: "Moscow Center",
    showLocation: "San Francisco, CA",
  },
  {
    showDate: "Wed Dec 18 2024",
    showVenue: "Press Club",
    showLocation: "San Francisco, CA",
  },
];

const showSection = document.querySelector(".shows");
const showWrapper = document.querySelector(".shows__wrapper");

/* function to create new element, add class name, add text and append */
const elementClassTextAppend = (element, className, text, parentElement) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.textContent = text;
  parentElement.appendChild(newElement);
};

/* function to create show section */
showArray.forEach(function (show) {
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
