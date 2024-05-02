function solution(n, s, a, b, fares) {
	const arr = Array.from(Array(n), () => Array(n).fill(-1));
	for (let [start, end, m] of fares) {
		arr[start - 1][end - 1] = m;
		arr[end - 1][start - 1] = m;
	}
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i === j) arr[i][j] = 0;
			else if (arr[i][j] === -1) arr[i][j] = Infinity;
		}
	}
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < n; k++) {
				// arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j]);
				arr[j][k] = Math.min(arr[j][k], arr[j][i] + arr[i][k]);
			}
		}
	}

	let answer = Infinity;
	for (let i = 0; i < n; i++) {
		let temp = 0;
		temp += arr[s - 1][i];
		temp += arr[i][a - 1];
		temp += arr[i][b - 1];
		answer = Math.min(temp, answer);
	}
	return answer;
}