'use strict'

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  toDay = new Date().getDay();

week.forEach((index, item) => {
  if (item === toDay - 1) {
    if (week[item] === 'Суббота' || week[item] === 'Воскресенье') {
      document.write(`<p><b><i>${week[item]}</i></b></p>`);
    } else {
      document.write(`<p><b>${week[item]}</b></p>`);
    }
  } else if (week[item] === 'Суббота' || week[item] === 'Воскресенье') {
    document.write(`<p><i>${week[item]}</i></p>`);
  } else {
    document.write(`<p>${week[item]}</p>`);
  }
})
