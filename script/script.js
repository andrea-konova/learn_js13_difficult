'use strict'

// first point
const ruWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  enWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let lang = 'ru';

if (lang === 'ru') {
  console.log(ruWeek);
} else if (lang === 'en') {
  console.log(enWeek);
}

switch (lang) {
  case 'ru':
    console.log(ruWeek);
    break;
  case 'en':
    console.log(enWeek);
    break;
}

const langArr = [];
langArr['ru'] = ruWeek;
langArr['en'] = enWeek;

console.log(langArr[lang]);

// second point
const namePerson = 'Артем';

const message = (namePerson == 'Артем') ? 'директор' :
  (namePerson == 'Максим') ? 'преподаватель' : 'студент' ;

console.log(message);

