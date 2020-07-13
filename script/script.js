'use strict'

const panda = document.querySelector('.panda'),
  fight = document.querySelector('.fight'),
  startingPosition = document.querySelector('.return');

let count = 0,
  animate = true,
  fightInterval;

const pandaFights = () => {
  fightInterval = requestAnimationFrame(pandaFights);
  count++;
  if (count < 300) {
    panda.style.left = count * 4 + 'px';
  } else {
    cancelAnimationFrame(fightInterval);
  }
}

fight.addEventListener('click', () => {
  if (animate) {
    animate = false;
    fightInterval = requestAnimationFrame(pandaFights);
  } else {
    animate = true;
    cancelAnimationFrame(fightInterval);
  }
});

startingPosition.addEventListener('click', () => {
  count = 0;
  panda.style.left = count;
});
