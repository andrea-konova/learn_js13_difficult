'use strict'

const wrapper = document.querySelector('.wrapper'),
  color = document.getElementById('color'),
  change = document.getElementById('change');

const getColor = function() {
  
  const randomColor = '#' + Math.floor(Math.random() * 256 * 256 * 256).toString(16);

  wrapper.style.backgroundColor = randomColor;
  color.textContent = randomColor;
  change.style.color = randomColor;
}

change.addEventListener('click', getColor);