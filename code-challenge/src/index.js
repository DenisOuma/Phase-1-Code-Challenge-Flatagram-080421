function getImages() {
  fetch(imageAddress)
    .then((response) => response.json())
    .then(getImagesComments)
    .catch((err) => console.log("Addresses not found"));
}
const getComments = () => {
  fetch(commentsAddress)
    .then((res) => res.json())
    .then(myComments)
    .catch((err) => console.log("Addresses not found"));
};

// Delete comments on click
function deleteComment() {
  deleteText.addEventListener("click", function (e) {
    console.log(deleteText);
  });
}

// Render Img Content on load
function getImagesComments(data) {
  title.textContent = data.title;
  image.src = data.image;
  comments.textContent = data.comments;
  //   comments.innerHTML = addComment(comment);
  myComments();
}
// Render comments from json file or db
function myComments(commentValue) {
  let myCommentsData = commentValue.content;
  [...myCommentsData].forEach((comment) => {
    return addComment(comment);
  });
  //   comments.textContent = commentValue.content;
  data.comments.forEach((comment) => {
    li.textContent = comment.content;
    comments.appendChild(li);
  });
}
// Incriment likes on click
function likes() {
  likes = 0;
  document.getElementById("like-button").addEventListener("click", () => {
    likes += 1;
    addLikes.textContent = `${likes} likes`;
  });
}
// Add new comments on click
function addComment(newComment) {
  let ul = document.createElement("li");
  ul.textContent = newComment;
  document.querySelector("#comments-list").appendChild(ul);
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addComment(e.target.comment.value);
    document.querySelector("form").reset();
  });

  ul.addEventListener("click", function (e) {
    // fetch(commentsAddress, {
    //   method: "DELETE",
    //   body: JSON.stringify({}),
    // })
    //   .then((res) => res.json())
    //   .then(getComments)
    //   .catch((err) => console.log("Addresses not found"));

    // Add new comments on click
    ul.remove();
  });
}

// Render Elements on Page Load
document.addEventListener("DOMContentLoaded", () => {
  imageAddress = "http://localhost:3000/images/1";
  commentsAddress = "http://localhost:3000/comments";
  image = document.getElementById("card-image");
  comments = document.getElementById("comments-list");
  title = document.getElementById("card-title");
  li = document.createElement("li");
  deleteText = li;
  addLikes = document.getElementById("like-count");

  getImages();
  likes();
  addComment();
  getComments();
  deleteComment();
});

