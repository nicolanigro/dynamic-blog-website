// Select form and message element
const form = document.getElementById("postForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("postTitle").value.trim();
  const content = document.getElementById("postContent").value.trim();

  if(title === "" || content === "") {
    formMessage.textContent = "Title and content cannot be empty.";
    return;
  }

  // Get existing posts from localStorage
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  // Add new post
  posts.push({ title, content });
  localStorage.setItem("posts", JSON.stringify(posts));

  formMessage.textContent = "Post added successfully!";
  form.reset();
});
