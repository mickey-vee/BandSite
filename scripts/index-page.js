const commentArray = [
  {
    Name: "Victor Pinto",
    Date: "11/02/2023",
    Comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    Name: "Christina Cabrera",
    Date: "10/28/2023",
    Comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    Name: "Isaac Tadesse",
    Date: "10/20/2023",
    Comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

/* form function */
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    console.log(name + comment);

    form.reset();
  });
});

/* function to create class */

const elementClassAppend = (element, className, parentElement) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  parentElement.appendChild(newElement);
};

/* function to create new element, add class name, add text and append */
const elementClassTextAppend = (element, className, text, parentElement) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.textContent = text;
  parentElement.appendChild(newElement);
};

const commentSection = document.querySelector(".comments");

console.log(commentSection);

commentArray.forEach(function (comment) {
  const comments = document.createElement("div");
  comments.classList.add("comments__wrapper");

  const commentImage = document.createElement("div");
  commentImage.classList.add("comments__old-image");
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
