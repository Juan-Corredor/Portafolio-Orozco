const formulario = document.getElementById("miFormulario");

  // Agrega un controlador de eventos para el evento de envío del formulario
  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtiene los valores de los campos de entrada
    const nombre = document.getElementById("name").value;
    const correo = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    // Muestra los valores en la consola
    console.log("Nombre:", nombre);
    console.log("Correo Electrónico:", correo);
    console.log("Asunto:", asunto);
    console.log("Solicitud:", mensaje);
  });