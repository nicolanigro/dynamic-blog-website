// Get elements
const editForm = document.getElementById("editForm");
const editTitle = document.getElementById("editTitle");
const editContent = document.getElementById("editContent");
const message = document.getElementById("message");
const deleteButton = document.getElementById("deleteButton");

// Get post ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

// Load posts from localStorage
const posts = JSON.parse(localStorage.getItem("posts")) || [];

// If post exists, populate form
if(postId !== null && posts[postId]) {
  editTitle.value = posts[postId].title;
  editContent.value = posts[postId].content;
} else {
  message.textContent = "Post not found!";
}

// Save edits
editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  posts[postId].title = editTitle.value.trim();
  posts[postId].content = editContent.value.trim();
  localStorage.setItem("posts", JSON.stringify(posts));
  message.textContent = "Post updated successfully!";
});

// Delete post
deleteButton.addEventListener("click", () => {
  posts.splice(postId, 1); // remove the post
  localStorage.setItem("posts", JSON.stringify(posts));
  message.textContent = "Post deleted!";
  setTimeout(() => {
    window.location.href = "index.html"; // go back to homepage
  }, 1000);
});
