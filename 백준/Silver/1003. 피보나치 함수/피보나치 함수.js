const fs = require("fs");
const inputs = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => Number(e));

let max = 0;
const obj = {};

for (let i = 1; i <= inputs[0]; i++) {
	if (max < inputs[i]) max = inputs[i];
	if (!obj[inputs[i]]) obj[inputs[i]] = 1;
}

let curr = [0, 0];
let prev = [1, 1];
let prevPrev = [0, 1];
const data = {};

for (let i = 3; i <= max; i++) {
	curr[0] = prev[0] + prevPrev[0];
	curr[1] = prev[1] + prevPrev[1];
	prevPrev = [...prev];
	prev = [...curr];
	if (obj[i]) data[i] = [...curr];
}

for (let i = 1; i <= inputs[0]; i++) {
	if (inputs[i] === 0) console.log("1 0");
	else if (inputs[i] === 1) console.log("0 1");
	else if (inputs[i] === 2) console.log("1 1");
	else console.log(data[inputs[i]].join(" "));
}
