const fs = require("fs");
const [N, ...input] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => Number(e));

const answer = [];
for (let n of input) {
	if (n === 0) answer.pop();
	else answer.push(n);
}

console.log(answer.length ? answer.reduce((a, b) => a + b) : 0);
