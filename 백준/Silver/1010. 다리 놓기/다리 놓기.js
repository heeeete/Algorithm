const [[T], ...sites] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

for (let i = 0; i < T; i++) {
	const [N, M] = sites[i];
	const dp = Array.from({ length: N }, () => Array(M).fill(0));
	for (let j = 0; j < N; j++) {
		for (let k = 0; k < M; k++) {
			if (j === 0) dp[j][k] = k + 1;
			else if (j > k) dp[j][k] = 0;
			else {
				dp[j][k] = dp[j][k - 1] + dp[j - 1][k - 1];
			}
		}
	}
	console.log(dp[N - 1][M - 1]);
}
