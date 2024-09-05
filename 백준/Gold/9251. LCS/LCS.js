const fs = require("fs");
const [f, s] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(""));

const len = f.length > s.length ? f.length : s.length;
const DP = Array.from({ length: len + 1 }, () => Array(len + 1).fill(0));

for (let i = 1; i <= len; i++) {
	for (let j = 1; j <= len; j++) {
		if (f[i - 1] === s[j - 1]) DP[i][j] = DP[i - 1][j - 1] + 1;
		else DP[i][j] = DP[i - 1][j] > DP[i][j - 1] ? DP[i - 1][j] : DP[i][j - 1];
	}
}
console.log(DP[len][len]);
// CAPCAK
// ACAYKP
// [
// 	[0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 1, 1, 1, 1],
// 	[0, 1, 1, 1, 2, 2, 2],
// 	[0, 1, 1, 1, 2, 2, 2],
// 	[0, 1, 1, 1, 2, 3, 3],
// 	[0, 1, 2, 2, 2, 3, 3],
// 	[0, 1, 2, 2, 2, 3, 4],
// ];
