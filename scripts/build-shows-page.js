/* <section class="shows">
  <h2 class="shows__title">Shows</h2>
  <ul class="shows__list">
    <li class="shows__list-item">DATE</li>

    <li class="shows__list-item">VENUE</li>
    <li class="shows__list-item">LOCATION</li>
    <button class="shows__button">BUY TICKETS</button>
  </ul>
</section>;
 */

/* add show section to js */
const showSection = document.querySelector(".shows");

/* creating show title */
const showTitle = document.createElement("h2");
showTitle.classList.add("shows__title");
showTitle.textContent = "Shows";
showSection.appendChild(showTitle);

/* creating show list */
const showList = document.createElement("ul");
showList.classList.add("shows__list");
showSection.appendChild(showList);

/* creating show list items */
const showDetails = ["DATE", "VENUE", "LOCATION"];

showDetails.forEach((item) => {
  const showListItem = document.createElement("li");
  showListItem.classList.add("shows__list-item");
  showListItem.textContent = item;
  showList.appendChild(showListItem);
});
