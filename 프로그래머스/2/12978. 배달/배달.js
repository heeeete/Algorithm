function solution(N, road, K) {
	var answer = 0;
	const dist = Array.from(Array(N), () => Array(N).fill(Infinity));

	for (let i = 0; i < N; i++) dist[i][i] = 0;
	for (let [a, b, c] of road) {
		if (dist[a - 1][b - 1] > c) {
			dist[a - 1][b - 1] = c;
			dist[b - 1][a - 1] = c;
		}
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			for (let k = 0; k < N; k++) {
				dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
			}
		}
	}

	console.log(dist);

	for (let i = 0; i < N; i++) {
		if (K >= dist[0][i]) answer++;
	}

	return answer;
}