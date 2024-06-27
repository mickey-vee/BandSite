/* add show section to js */
const showSection = document.querySelector(".shows");

/* creating show title */
const showTitle = document.createElement("h2");
showTitle.classList.add("shows__title");
showTitle.textContent = "Shows";
showSection.appendChild(showTitle);

/* show details array */
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

showArray.forEach(function (shows) {
  const showList = document.createElement("ul");
  showList.classList.add("shows__list");

  const showListDate = document.createElement("li");
  showListDate.classList.add("shows__list-date");
  showListDate.textContent = "DATE";
  showList.appendChild(showListDate);

  const showListDates = document.createElement("li");
  showListDates.classList.add("shows__list-date--text");
  showListDates.textContent = shows.showDate;
  showListDate.appendChild(showListDates);

  const showListVenue = document.createElement("li");
  showListVenue.classList.add("shows__list-venue");
  showListVenue.textContent = "VENUE";
  showList.appendChild(showListVenue);

  const showListVenues = document.createElement("li");
  showListVenues.classList.add("shows__list--text");
  showListVenues.textContent = shows.showVenue;
  showListVenue.appendChild(showListVenues);

  const showListLocation = document.createElement("li");
  showListLocation.classList.add("shows__list-location");
  showListLocation.textContent = "LOCATION";
  showList.appendChild(showListLocation);

  const showListLocations = document.createElement("li");
  showListLocations.classList.add("shows__list--text");
  showListLocations.textContent = shows.showLocation;
  showListLocation.appendChild(showListLocations);

  const showButton = document.createElement("button");
  showButton.classList.add("shows__button");
  showButton.textContent = "BUY TICKETS";
  showList.appendChild(showButton);

  showSection.appendChild(showList);
});
