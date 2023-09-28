// Seleccionar todos los enlaces de navegación
const links = document.querySelectorAll('a[href^="#"]');
  
// Agregar un manejador de eventos a cada enlace
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    // Obtener el ID de la sección a la que se va a desplazar
    const targetId = link.getAttribute('href').substring(1);

    // Seleccionar la sección objetivo
    const targetSection = document.getElementById(targetId);

    // Desplazarse suavemente hasta la sección objetivo
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  });
});