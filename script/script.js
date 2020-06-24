'use strict'

const wrapper = document.querySelector('.wrapper'),
  color = document.getElementById('color'),
  change = document.getElementById('change');

const getColor = function() {
  const r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256),
    randomColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  wrapper.style.backgroundColor = randomColor;
  color.textContent = randomColor;
  change.style.color = randomColor;
}

change.addEventListener('click', getColor);