document.addEventListener("DOMContentLoaded", () => {
  const mensajes = [
    "¡Hola! 👋",
    "Soy Brayan, desarrollador web.",
    "Explora mis proyectos abajo 👇",
    "¡Gracias por visitar mi portfolio!",
  ];

  const bubble = document.getElementById("bubble-text");
  if (!bubble) return;

  let i = 0;

  setInterval(() => {
    bubble.textContent = mensajes[i];
    i = (i + 1) % mensajes.length;
  }, 4000);
});
