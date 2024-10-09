const fs = require("fs");
const input = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((e) => Number(e))
	.sort((a, b) => a - b);

let big = input[1];
let small = input[0];

while (big % small !== 0) {
	let temp = small;
	small = big % small;
	big = temp;
}
console.log(small);
console.log((input[0] * input[1]) / small);