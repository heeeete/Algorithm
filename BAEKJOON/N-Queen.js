const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin"));

let answer = 0;
const map = Array.from({ length: N }, () => Array(N).fill(0));
// const visited = Array.from({ length: N }, () => Array(N).fill(0));

function check(y, x) {
	for (let i = y - 1; i >= 0; i--) if (map[i][x] === 1) return false;
	for (let i = y + 1; i < N; i++) if (map[i][x] === 1) return false;
	let i = y,
		j = x;
	while (--i >= 0 && --j >= 0) if (map[i][j] === 1) return false;
	i = y;
	j = x;
	while (--i >= 0 && ++j < N) if (map[i][j] === 1) return false;
	i = y;
	j = x;
	while (++i < N && ++j < N) if (map[i][j] === 1) return false;
	i = y;
	j = x;
	while (++i < N && --j >= 0) if (map[i][j] === 1) return false;
	return true;
}

function dfs(y) {
	if (y === N) return answer++;

	for (let x = 0; x < N; x++) {
		if (check(y, x)) {
			map[y][x] = 1;
			dfs(y + 1);
			map[y][x] = 0;
		}
	}
}

dfs(0);
console.log(answer);
