function solution(triangle) {
	if (triangle.length === 1) return triangle[0][0];
	const yLen = triangle.length;

	for (let i = 1; i < yLen; i++) {
		const xLen = triangle[i].length - 1;
		for (let j = 0; j < xLen + 1; j++) {
			if (i === 1) {
				triangle[i][j] = triangle[0][0] + triangle[i][j];
			} else {
				if (j === 0) {
					triangle[i][j] = triangle[i - 1][j] + triangle[i][j];
				} else if (j === xLen) {
					triangle[i][j] = triangle[i - 1][j - 1] + triangle[i][xLen];
				} else {
					const max =
						triangle[i - 1][j] > triangle[i - 1][j - 1]
							? triangle[i - 1][j]
							: triangle[i - 1][j - 1];
					triangle[i][j] = max + triangle[i][j];
				}
			}
		}
	}
	const max = Math.max(...triangle[triangle.length - 1]);
	return max;
}