const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);
let answers = [];

for (let i = 1; i <= T; i++) {
	let [a, b] = input[i].split(" ").map(Number);
	answers.push(a + b);
}
console.log(answers.join("\n"));
