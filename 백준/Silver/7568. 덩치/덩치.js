const fs = require("fs");
const [N, ...input] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

const answer = [];

for (let i = 0; i < N; i++) {
	let cnt = N[0];
	for (let j = 0; j < N; j++) {
		if (i === j) continue;
		if (input[i][0] >= input[j][0] || input[i][1] >= input[j][1]) cnt--;
	}
	answer.push(cnt);
}

console.log(answer.join(" "));
