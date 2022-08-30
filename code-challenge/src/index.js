function getImages() {
  fetch("http://localhost:3000/images/1")
    .then((response) => response.json())
    .then(getImagesComments);
}
function getImagesComments(data) {
  title.textContent = data.title;
  image.src = data.image;

  comments.innerHTML = " ";
  function myComments() {
    data.comments.forEach((comment) => {
      li.textContent = comment.content;
      comments.appendChild(li);
    });
  }
}
function likes() {
  likes = 0;
  document.getElementById("like-button").addEventListener("click", () => {
    likes += 1;
    addLikes.textContent = `${likes} likes`;
  });
}
function addComment(newComment) {
  let ul = document.createElement("li");
  ul.textContent = newComment;
  document.querySelector("#comments-list").appendChild(ul);
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addComment(e.target.comment.value);
    document.querySelector("form").reset();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  image = document.getElementById("card-image");
  comments = document.getElementById("comments-list").innerText = "";
  title = document.getElementById("card-title");
  li = document.createElement("li");
  addLikes = document.getElementById("like-count");

  getImages();
  likes();
  addComment();
});
