// создал переменную num
let num = 266219;

// преобразую число в массив
let arr = num.toString().split('');

// создал переменную для произведения чисел
let sum = 1;

// получаю каждый элемент массива
// и перемножаю элементы между собой
arr.forEach(function(item) {
  sum *= item;
});

console.log(sum);

// возвожу в степень 3
let Exp3 = sum ** 3;
console.log(Exp3);

console.log(String(Exp3).slice(0,2));

