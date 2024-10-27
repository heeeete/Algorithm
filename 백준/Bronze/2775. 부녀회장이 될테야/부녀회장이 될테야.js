const [n, ...input] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map((e) => Number(e));

for (let i = 0; i < input.length; i += 2) {
	const floor = input[i];
	const room = input[i + 1];
	const dp = Array(room + 1);
	for (let j = 0; j <= floor; j++) {
		for (let k = 1; k <= room; k++) {
			if (dp[k] === undefined) dp[k] = k;
			else if (k === 1) continue;
			else dp[k] += dp[k - 1];
		}
	}
	console.log(dp[dp.length - 1]);
}