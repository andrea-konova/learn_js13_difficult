let num = 266219;

function getNumbers(num) {
	let res = []
	let base = 10
	let currNum = Math.abs(num)
	do {
		let baseShiftedNum = Math.floor(currNum / base)
		let diff = currNum - baseShiftedNum * base
		res.unshift(diff)
		currNum = baseShiftedNum
	} while (currNum > 0)
	return res
}

let numExp3 = num ** 3;
console.log(numExp3);

console.log(String(numExp3).slice(0,2));

