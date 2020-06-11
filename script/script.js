const num = 266219;
const numToArray = num.toString().split('');

const amountOfArrayElements = numToArray.reduce(function (n, item) {
  return n * item;
})
console.log(amountOfArrayElements);

const amountPower3 = amountOfArrayElements ** 3;
console.log(amountPower3);

const firstTwoDigits = String(amountPower3).slice(0,2)

alert(firstTwoDigits);

