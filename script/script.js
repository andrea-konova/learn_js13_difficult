'use strict'

// first point
let lang;
lang = 'en';

if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch (lang) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
}

// second point
const namePerson = 'Максим';

const message = (namePerson == 'Артем') ? 'директор' :
  (namePerson == 'Максим') ? 'преподаватель' :
   'студент' ;

console.log(message);

