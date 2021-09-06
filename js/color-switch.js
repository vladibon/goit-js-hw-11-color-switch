import colors from './colors.js';
import refs from './refs.js';

let intervalId = null;

refs.startBtn.onclick = () => {
  refs.startBtn.disabled = true;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomId(0, colors.length - 1)];
  }, 1000);
};

refs.stopBtn.onclick = () => {
  refs.startBtn.disabled = false;

  clearInterval(intervalId);
};

function randomId(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
