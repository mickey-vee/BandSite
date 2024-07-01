const commentArray = [
  {
    Name: "Victor Pinto",
    Date: "11/02/2023",
    Comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    ImageClass: "comments__old-image",
  },
  {
    Name: "Christina Cabrera",
    Date: "10/28/2023",
    Comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    ImageClass: "comments__old-image",
  },
  {
    Name: "Isaac Tadesse",
    Date: "10/20/2023",
    Comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    ImageClass: "comments__old-image",
  },
];

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
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

/* function for comments */
const renderComments = () => {
  const commentSection = document.querySelector(".form-comments");
  commentSection.innerHTML = "";
  commentArray.forEach((comment) => {
    const comments = document.createElement("div");
    comments.classList.add("comments__wrapper");

    const commentImage = document.createElement("div");
    commentImage.classList.add(comment.ImageClass);
    comments.appendChild(commentImage);

    const commentOld = document.createElement("div");
    commentOld.classList.add("comments__old-wrapper");
    comments.appendChild(commentOld);

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
    commentSection.appendChild(comments);
  });
};

/* form function */
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("form");
  const nameInput = document.querySelector(".comments__name");
  const commentInput = document.querySelector(".comments__text");
  const formSection = document.querySelector(".form-comments");

  form.addEventListener("submit", function (e) {
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
      const newComment = {
        Name: name,
        Date: today,
        Comment: comment,
        ImageClass: "comments__image",
      };
      commentArray.unshift(newComment);
      renderComments();
      form.reset();
    }
  });
  renderComments();
});
