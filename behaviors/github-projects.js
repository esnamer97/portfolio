// Reemplaza este valor con tu nombre de usuario de GitHub
const username = "esnamer97"; // <-- cámbialo si es necesario

const projectsContainer = document.getElementById("github-projects");

// Función que crea una tarjeta visual
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <div class="project-card__title">${project.name}</div>
    <div class="project-card__description">
      ${project.description ? project.description : "No description provided."}
    </div>
    <div class="project-card__meta">
      <span>🛠 ${project.language || "Unknown"}</span>
      <span>⭐ ${project.stargazers_count}</span>
    </div>
    <a href="${project.html_url}" class="project-card__link" target="_blank">
      View on GitHub →
    </a>
  `;

  return card;
}

// Petición a la API de GitHub
fetch(`https://api.github.com/users/${username}/repos`)
  .then((response) => response.json())
  .then((repos) => {
    // Ordenar por estrellas (opcional)
    const sortedRepos = repos.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );

    // Pintar los primeros N proyectos
    sortedRepos.forEach((repo) => {
      const card = createProjectCard(repo);
      projectsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching GitHub projects:", error);
    projectsContainer.innerHTML = "<p>Error loading projects.</p>";
  });
