const fs = require("fs");
const input = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((arr) => arr.split(" ").map((a) => Number(a)));
const map = Array.from({ length: 100 }, () => Array(100).fill(0));
let count = 0;

for (let i = 1; i <= input[0][0]; i++) {
	let Y = input[i][0];
	let X = input[i][1];
	for (let y = 0; y < 10; y++) {
		for (let x = 0; x < 10; x++) {
			if (++map[Y + y][X + x] === 1) ++count;
		}
	}
}
console.log(count);
