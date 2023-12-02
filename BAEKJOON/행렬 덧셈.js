const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const answers = [];

for (let i = 1; i <= N; i++) {
	let aRow = input[i].split(" ").map(Number);
	let bRow = input[i + N].split(" ").map(Number);
	let temp = [];
	for (let j = 0; j < M; j++) {
		temp.push(aRow[j] + bRow[j]);
	}
	answers.push(temp.join(" "));
}

console.log(answers.join("\n"));
