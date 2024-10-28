const [input, ...arr] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));
const dp = Array.from({ length: input[0] }, () => Array(input[1]).fill(-1));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
dp[input[0] - 1][input[1] - 1] = 1;

const dfs = (x, y) => {
	if (dp[x][y] !== -1) return dp[x][y];
	let count = 0;

	for (let i = 0; i < 4; i++) {
		const nx = x + dx[i];
		const ny = y + dy[i];
		if (nx >= 0 && ny >= 0 && nx < input[0] && ny < input[1] && arr[nx][ny] < arr[x][y]) {
			count += dfs(nx, ny);
		}
	}

	dp[x][y] = count;
	return count;
};

console.log(dfs(0, 0));
