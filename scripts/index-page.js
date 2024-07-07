import BandSiteApi from "../scripts/band-site-api.js";
const apiKey = "f2db11a6-a4e5-44d7-b2f5-65ce233efbf8";
const api = new BandSiteApi(apiKey);

let commentArray = [];

const formatDate = (date) => {
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yyyy = date.getFullYear();
  return mm + "/" + dd + "/" + yyyy;
};

async function commentsApi() {
  try {
    const commentData = await api.getComments();
    commentArray = commentData.map((comment) => {
      const commentDate = new Date(comment.timestamp);
      return {
        Name: comment.name,
        Date: formatDate(commentDate),
        Comment: comment.comment,
        Timestamp: commentDate.getTime(),
      };
    });
    commentArray.sort((a, b) => b.Timestamp - a.Timestamp);
    return commentArray;
  } catch (e) {
    console.log(e);
  }
}

const commentSection = document.querySelector(".form-comments");

/* function to create new element, add class name, add text and append */
const elementClassTextAppend = (element, className, text, parentElement) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.textContent = text;
  parentElement.appendChild(newElement);
};

/* generate date */
let today = new Date();
let formattedToday = formatDate(today);
let todayTimestamp = today.getTime();

/* function for comments */
function renderApiComments(commentArray) {
  renderComments(commentArray);
}

const renderComments = (comments) => {
  commentSection.innerHTML = "";
  comments.forEach((comment) => {
    const commentsWrapper = document.createElement("div");
    commentsWrapper.classList.add("comments__wrapper");

    const commentImage = document.createElement("div");
    commentImage.classList.add("comments__old-image");
    commentsWrapper.appendChild(commentImage);

    const commentOld = document.createElement("div");
    commentOld.classList.add("comments__old-wrapper");
    commentsWrapper.appendChild(commentOld);

    const commentNameDate = document.createElement("div");
    commentNameDate.classList.add("comments__name-date");
    commentOld.appendChild(commentNameDate);

    elementClassTextAppend(
      "h4",
      "comments__old-name",
      comment.Name,
      commentNameDate
    );
    elementClassTextAppend(
      "h4",
      "comments__old-date",
      comment.Date,
      commentNameDate
    );
    elementClassTextAppend(
      "p",
      "comments__old-text",
      comment.Comment,
      commentOld
    );
    commentSection.appendChild(commentsWrapper);
  });
};

/* form function */
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("form");
  const nameInput = document.querySelector(".comments__name");
  const commentInput = document.querySelector(".comments__text");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    nameInput.classList.remove("comments__required");
    commentInput.classList.remove("comments__required");

    if (name === "" && comment === "") {
      nameInput.classList.add("comments__required");
      commentInput.classList.add("comments__required");
    } else if (name === "") {
      nameInput.classList.add("comments__required");
    } else if (comment === "") {
      commentInput.classList.add("comments__required");
    } else {
      try {
        const newComment = await api.postComment(name, comment);
        commentArray.unshift({
          Name: name,
          Date: formattedToday,
          Comment: comment,
          Timestamp: todayTimestamp,
        });
        commentArray.sort((a, b) => b.Timestamp - a.Timestamp);
        renderComments(commentArray);
        form.reset();
      } catch (e) {
        console.error("Error posting comment:", e);
      }
    }
  });

  commentsApi().then(() => {
    renderComments(commentArray);
  });
});

async function main() {
  try {
    await commentsApi();
    renderApiComments(commentArray);
  } catch (e) {
    console.log(e);
  }
}

main();
