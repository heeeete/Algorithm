const fs = require("fs");
const [[N], [...data]] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

let max = data.shift();
const DP = [max];
for (let num of data) {
	if (max < DP[DP.length - 1] + num) max = DP[DP.length - 1] + num;
	else if (max < num) max = num;
	DP.push(DP[DP.length - 1] + num > num ? DP[DP.length - 1] + num : num);
}

console.log(max);
