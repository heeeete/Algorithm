const fs = require("fs");
const [N, ...data] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => Number(e));

// data [10,20,15,30]
// f[0] = 0
// f[1] = 10
// f[2] = 20, 30
// f[3] = f[1] + 15, f[0] + 20 + 15
// f[4] = f[2] + 30, f[1] + 15 + 30

// f[n] = f[n - 2] + data[n-1], f[n - 3] + data[n - 2] + data[n - 1]
const dp = [0, data[0], data[0] + data[1]];
for (let i = 3; i <= data.length; i++) {
	const temp = dp[i - 2] + data[i - 1];
	const temp2 = dp[i - 3] + data[i - 2] + data[i - 1];
	dp.push(temp > temp2 ? temp : temp2);
}
console.log(dp[N]);
