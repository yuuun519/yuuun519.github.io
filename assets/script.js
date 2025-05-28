// script.js

const username = "yuuun519";

// GitHub API 호출
fetch(`https://api.github.com/users/${username}/repos`)
  .then((response) => response.json())
  .then((repos) => {
    const repoList = document.getElementById("repo-list");

    repos.forEach((repo) => {
           if (!repo.fork) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        repoList.appendChild(listItem);
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching repos:", error);
  });


function toggleProjects() {
  const projectList = document.getElementById("project-list");
  if (projectList.style.display === "none") {
    projectList.style.display = "block";
  } else {
    projectList.style.display = "none";
  }
}

function toggleSidebar(forceClose = false) {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("overlay");

  if (forceClose || sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    overlay.style.display = "none";
  } else {
    sidebar.classList.add("active");
    overlay.style.display = "block";
  }
}