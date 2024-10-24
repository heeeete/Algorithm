const fs = require("fs");
const [n, ...input] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const history = {};
const arr = [];

for (let name of input) {
	if (history[name] === undefined) history[name] = 1;
	else if (history[name] === 1) arr.push(name);
}

console.log(arr.length + "\n" + arr.sort().join("\n"));
