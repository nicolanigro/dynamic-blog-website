// Load posts from local storage
const postsContainer = document.getElementById("postsContainer");

function loadPosts() {
  postsContainer.innerHTML = ""; // clear previous
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.forEach((post, index) => {
    const postEl = document.createElement("div");
    postEl.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <a href="post.html?id=${index}">View/Edit</a>
    `;
    postsContainer.appendChild(postEl);
  });
}

loadPosts();
