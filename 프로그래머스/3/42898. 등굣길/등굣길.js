function solution(m, n, puddles) {
	const map = Array.from(Array(n), () => Array(m).fill(-1));
	for (let i = 0; i < n; i++) map[i][0] = 1;
	for (let i = 0; i < m; i++) map[0][i] = 1;

	for (let [x, y] of puddles) {
		x--, y--;
		map[y][x] = 0;
		if (y === 0) for (let i = x; i < m; i++) map[0][i] = 0;
		else if (x === 0) for (let i = y; i < n; i++) map[i][0] = 0;
	}

	for (let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			if (map[i][j] !== 0)
				map[i][j] = (map[i - 1][j] + map[i][j - 1]) % 1000000007;
		}
	}
	return map[n - 1][m - 1];
}