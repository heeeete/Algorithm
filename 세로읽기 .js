const fs = require("fs");
const input = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((arr) => arr.split(""));
let strArr = [];
let answers = "";
input.map((arr) =>
	arr.map((char, idx) => {
		if (!strArr[idx]) strArr[idx] = "";
		strArr[idx] += char;
	})
);
strArr.map((str) => (answers += str));

console.log(answers);
