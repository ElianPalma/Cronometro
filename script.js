
var usuario = prompt("Escribe tu primer nombre y primer apellido");


if (usuario) {

  var parrafo = document.getElementById("bienvenida");

parrafo.innerHTML= usuario;
  
} else {

  var parrafo = document.getElementById("bienvenida");

  parrafo.innerHTML= "usuario";
  
}





let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
}

function pauseTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerDisplay.textContent = "00:00:00";
  startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled = true;
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  const timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  timerDisplay.textContent = timeString;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}


/*ventana emergente*/

// Obtener elementos del DOM
var btnPopup = document.getElementById("btnPopup");
var popup = document.getElementById("popup");
var btnCerrar = document.getElementById("btnCerrar");

// Mostrar el popup al hacer clic en el botón
btnPopup.addEventListener("click", function() {
  setTimeout(function() {
    popup.style.display = "flex";
  }, 100);
});

// Cerrar el popup al hacer clic en el botón de cerrar
btnCerrar.addEventListener("click", function() {
  popup.style.display = "none";
});