
// Seleccionar todos los enlaces de navegación
const links = document.querySelectorAll('.links');

// Agregar un manejador de eventos a cada enlace
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    // Eliminar la clase "active" de todos los enlaces
    links.forEach((otherLink) => {
      otherLink.classList.remove('active');
    });

    // Agregar la clase "active" solo al enlace actual
    link.classList.add('active');

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
