function solution(n, s, a, b, fares) {
	var answer = 0;
	const dists = Array.from(Array(n), () => Array(n).fill(Infinity));
	for (let i = 0; i < n; i++) dists[i][i] = 0;
	for (let [start, end, dist] of fares) {
		dists[start - 1][end - 1] = dist;
		dists[end - 1][start - 1] = dist;
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < n; k++) {
				dists[j][k] = Math.min(dists[j][k], dists[j][i] + dists[i][k]);
			}
		}
	}

	let min = dists[s - 1][a - 1] + dists[s - 1][b - 1];
	for (let i = 0; i < n; i++) {
		if (min > dists[s - 1][i] + dists[i][a - 1] + dists[i][b - 1])
			min = dists[s - 1][i] + dists[i][a - 1] + dists[i][b - 1];
	}

	return min;
}