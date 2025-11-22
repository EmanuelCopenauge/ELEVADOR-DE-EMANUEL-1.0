// Selección de elementos
const display = document.getElementById('keypad-display');
const buttons = document.querySelectorAll('.keypad-btn');
const btnCall = document.getElementById('btn-call');
const btnDelete = document.getElementById('btn-delete');

const elevatorStatus = document.getElementById('elevator-status');
const displayTarget = document.getElementById('display-target');
const callLogList = document.getElementById('call-log-list');

// Función para agregar valor al display del teclado
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    if (value) {
      if (display.textContent === '---') display.textContent = '';
      display.textContent += value;
    }
  });
});

// Función borrar
btnDelete.addEventListener('click', () => {
  if (display.textContent !== '---') {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') display.textContent = '---';
  }
});

// Función llamar
btnCall.addEventListener('click', () => {
  const apartment = display.textContent;
  if (apartment !== '---') {
    // Actualiza la pantalla principal del ascensor
    displayTarget.textContent = `Llamando al apartamento ${apartment}`;
    // Actualiza el estado del ascensor
    elevatorStatus.textContent = `Llamada enviada a ${apartment}`;
    // Agrega al registro de llamadas
    const li = document.createElement('li');
    li.textContent = `Apartamento ${apartment} llamado`;
    callLogList.prepend(li);
    
    // Reinicia el display del teclado
    display.textContent = '---';
  }
});
