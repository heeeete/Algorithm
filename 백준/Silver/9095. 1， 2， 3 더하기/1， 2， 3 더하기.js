const fs = require("fs");
const [N, ...data] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => Number(e));

const max = Math.max(...data);
const dp = [1, 2, 4];
for (let i = 4; i <= max; i++) dp.push(dp[i - 4] + dp[i - 3] + dp[i - 2]);
for (let v of data) console.log(dp[v - 1]);
