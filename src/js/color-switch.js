import colors from '../db/colors.json';
import refs from './refs.js';

let intervalId = null;

refs.startBtn.onclick = () => {
  refs.startBtn.disabled = true;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomId(0, colors.length - 1)];
  }, 1000);
};

refs.stopBtn.onclick = () => {
  clearInterval(intervalId);

  refs.startBtn.disabled = false;
};

function randomId(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
