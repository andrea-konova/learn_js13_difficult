'use strict'

const date = new Date(),
  year = date.getFullYear(),
  month = date.getMonth(),
  dayWeek = date.getDay(),
  dayMonth = date.getDate(),
	hours = date.getHours(),
	minutes = date.getMinutes(),
  seconds = date.getSeconds();

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const months = [];
months['0'] = 'января';
months['1'] = 'февраля';
months['2'] = 'марта';
months['3'] = 'апреля';
months['4'] = 'мая';
months['5'] = 'июня';
months['6'] = 'июля';
months['7'] = 'августа';
months['8'] = 'сентября';
months['9'] = 'октября';
months['10'] = 'ноября';
months['11'] = 'декабря';

const getFirstTask = () => {

  let hoursName,
    minutesName,
    secondsName;
  
  const fixHoursName = () => {
		const lastHours = hours.toString().slice(-1);
		if (lastHours == 1) {
			hoursName = 'час';
		} else if (lastHours > 1 && lastHours < 4) {
			hoursName = 'часа';
		} else {
			hoursName = 'часов';
		}
	};

  fixHoursName();

  const fixMinutesName = () => {
		const lastMinutes = minutes.toString().slice(-1);
		if (lastMinutes == 1) {
			minutesName = 'минута';
		} else if (lastMinutes > 1 && lastMinutes <= 4) {
			minutesName = 'минуты';
		} else if (lastMinutes >= 5 || lastMinutes == 0) {
			minutesName = 'минут';
		}
	};

  fixMinutesName();

  const fixSecondsName = () => {
		const lastSeconds = seconds.toString().slice(-1);
		if (lastSeconds == 1) {
			secondsName = 'секунда';
		} else if (lastSeconds > 1 && lastSeconds <= 4) {
			secondsName = 'секунды';
		} else if (lastSeconds >= 5 || lastSeconds == 0) {
			secondsName = 'секунд';
		}
	};

  fixSecondsName();

	const div = document.createElement('div');
  div.innerHTML = `Сегодня ${week[dayWeek]}, 
    ${dayMonth} ${months[month]} ${year}, 
    ${hours} ${hoursName} ${minutes} ${minutesName} ${seconds} ${secondsName}`;
	document.body.append(div);
};

getFirstTask();

const getSecondTask = () => {
  const time = date.toLocaleTimeString(),
    dates = date.toLocaleDateString();

  const div = document.createElement('div');
  div.innerHTML = `${dates} - ${time}`;
	document.body.append(div);
}

getSecondTask();


// const start = () => {
// 	getFirstTask();

// };

// start();
