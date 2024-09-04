const fs = require("fs");
const [[N], ...prices] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

const DP = Array.from({ length: N }, () => Array(3).fill(Infinity));

for (let i = 0; i < N - 1; i++) {
	for (let j = 0; j < 3; j++) {
		for (let k = 0; k < 3; k++) {
			if (j === k) continue;
			if (DP[i + 1][k] > prices[i][j] + prices[i + 1][k])
				DP[i + 1][k] = prices[i][j] + prices[i + 1][k];
		}
	}
	prices[i + 1] = [...DP[i + 1]];
}

console.log(Math.min(...DP[N - 1]));