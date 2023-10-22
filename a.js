const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((v, _) => v.split(" ").map((x) => +x));

console.log(input);
