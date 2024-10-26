const [n, input] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));
const dp = Array(input.length).fill(1);

for (let i = 1; i < input.length; i++) {
	for (let j = 0; j < i; j++) {
		if (input[i] < input[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
	}
}

console.log(Math.max(...dp));
