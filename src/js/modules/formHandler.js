export default function setupFormHandler() { // Corregido: "f" a "F"
  const form = document.getElementById('survey-form');
  const messageContainer = document.getElementById('message-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const dropdown = document.getElementById('dropdown').value;
    const radioButtons = document.querySelectorAll('input[name="choice"]:checked'); // Corregido: eliminé el espacio extra en 'input [name="choice"]'
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked'); // Corregido: eliminé el espacio extra en 'input [type="checkbox"]'
    const comments = document.getElementById('comments').value;

    if (name && email && age && dropdown && radioButtons && checkboxes.length > 0 && comments) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON EXITO';
      messageContainer.style.color = 'green';
      form.reset();
    } else {
      messageContainer.textContent = 'Por favor, complete todos los campos requeridos';
      messageContainer.style.color = 'red';
    }
  });
}
