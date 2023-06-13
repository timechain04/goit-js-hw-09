const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
const randomColor = () => body.style.backgroundColor = `${getRandomHexColor()}`;

let timerId
stopBtn.setAttribute('disabled', 'disabled');

function startBtnHandler() {
    timerId = setInterval(randomColor, 1000)
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled');
}

function stopBtnHandler() {
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', 'disabled');
    clearInterval(timerId);
}

startBtn.addEventListener('click', startBtnHandler)
stopBtn.addEventListener('click', stopBtnHandler)