const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
const randomColor = () => body.style.backgroundColor = `${getRandomHexColor()}`

stopBtn.setAttribute('disabled', 'disabled')
let timerId

function onStartClick() {
     timerId = setInterval(randomColor, 1000)
    startBtn.setAttribute('disabled', 'disabled')
    stopBtn.removeAttribute('disabled')
}

function onStopClick() {
    stopBtn.setAttribute('disabled', 'disabled')
    startBtn.removeAttribute('disabled')
    clearInterval(timerId)
}