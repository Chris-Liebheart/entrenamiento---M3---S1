// sistema_interactivo.js
document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const name = document.getElementById('nombre').value.trim();
  const ageInput = document.getElementById('edad').value.trim();
  const output = document.getElementById('output');

  output.textContent = ""; // Limpiar resultados anteriores

  // Validacion nombre
  if (name === "") {
    console.error("Error: El nombre no puede estar vacío.");
    output.textContent = "Por favor, ingresa tu nombre.";
    output.style.color = "red";
    return;
  }

  // Validacion edad
  const age = parseInt(ageInput, 10);
  if (isNaN(age) || ageInput === "") {
    console.error("Error: Por favor, ingresa una edad válida.");
    output.textContent = "Por favor, ingresa una edad válida.";
    output.style.color = "red";
    return;
  }

  //Establece el texto ageStatus según si el usuario es menor o mayor de edad
  let ageStatus = "";
  if (age >= 18) {
    ageStatus = "Eres mayor de edad. estas listo para el mundo de la programacion";
  } else {
    ageStatus = "Eres menor de edad. puedes seguir preparandote y no pierdas las ganas";
  }

  // Mostrar mensaje de éxito
  output.textContent = `¡Hola, ${name}! Tienes ${age} años. ${ageStatus}`;
  output.style.color = "green"; 
});
