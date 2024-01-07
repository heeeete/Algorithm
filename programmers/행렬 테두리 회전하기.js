function solution(rows, columns, queries) {
	var answer = [];
	var map = Array.from({ length: rows }, () => Array(columns));

	let n = 1;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			map[i][j] = n++;
		}
	}

	while (queries.length) {
		var cpMap = map.map((v) => [...v]);
		var arr = [];
		let [y, x, y2, x2] = queries.shift();
		--y, --x, --y2, --x2;
		for (let i = y; i <= y2; i++) {
			for (let j = x; j <= x2; j++) {
				if (i === y && j === x) map[i][j] = cpMap[i + 1][j];
				else if (i === y2 && j === x2) map[i][j] = cpMap[i - 1][j];
				else if (i === y && j === x2) map[i][j] = cpMap[i][j - 1];
				else if (i === y2 && j === x) map[i][j] = cpMap[i][j + 1];
				else if (i === y) map[i][j] = cpMap[i][j - 1];
				else if (i === y2) map[i][j] = cpMap[i][j + 1];
				else if (j === x) map[i][j] = cpMap[i + 1][j];
				else if (j === x2) map[i][j] = cpMap[i - 1][j];
				if (i === y || j === x || i === y2 || j === x2) arr.push(map[i][j]);
			}
		}

		answer.push(Math.min(...arr));
	}

	return answer;
}

console.log(
	solution(6, 6, [
		[2, 2, 5, 4],
		[3, 3, 6, 6],
		[5, 1, 6, 3],
	])
);
