const fs = require("fs");
const [[input], requests, [total]] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

requests.sort((a, b) => a - b);

let start = 1;
let end = requests[requests.length - 1];

while (start <= end) {
	const mid = ~~((start + end) / 2);
	let temp = total;
	let count = 0;
	for (let req of requests) {
		if (temp <= 0) break;
		temp -= req < mid ? req : mid;
		count++;
	}
	// console.log(start, mid, end, temp, count);
	if (temp < 0) end = mid - 1;
	else if (count !== input) end = mid - 1;
	else start = mid + 1;
}

console.log(end);
