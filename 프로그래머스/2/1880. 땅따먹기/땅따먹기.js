function solution(land) {
	var answer;

	for (let i = 1; i < land.length; i++) {
		for (let j = 0; j < 4; j++) {
			const origin = land[i][j];
			for (let k = 0; k < 4; k++) {
				if (j !== k && land[i][j] < origin + land[i - 1][k]) {
					land[i][j] = origin + land[i - 1][k];
				}
			}
		}
	}

	return Math.max(...land[land.length - 1]);
}