function solution(rectangle, characterX, characterY, itemX, itemY) {
	var answer = 1;
	let queue = [[characterY * 2, characterX * 2]];
	let dx = [-1, 1, 0, 0];
	let dy = [0, 0, -1, 1];
	rectangle = rectangle.map((rec) => rec.map((e) => e * 2));
	let map = Array.from({ length: 103 }, () => Array(103).fill(0));
	for (let rec of rectangle) {
		for (let i = rec[1]; i <= rec[3]; i++) {
			for (let j = rec[0]; j <= rec[2]; j++) {
				if (characterX * 2 === j && characterY * 2 === i) map[i][j] = "C";
				else if (itemX * 2 === j && itemY * 2 === i) map[i][j] = "I";
				else if (j === rec[0] || j === rec[2] || i === rec[1] || i === rec[3])
					map[i][j] += 1;
				else map[i][j] += 3;
			}
		}
	}

	while (queue.length) {
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			const start = queue.shift();
			map[start[0]][start[1]] = -1;
			for (let j = 0; j < 4; j++) {
				let [y, x] = start;
				if (map[y + dy[j]][x + dx[j]] === "I") {
					return answer / 2;
				}
				if (
					x + dx[j] >= 0 &&
					y + dy[j] >= 0 &&
					x + dx[j] < map[0].length &&
					y + dy[j] < map.length &&
					(map[y + dy[j]][x + dx[j]] === 1 || map[y + dy[j]][x + dx[j]] === 2)
				) {
					queue.push([y + dy[j], x + dx[j]]);
				}
			}
		}
		answer++;
	}

	return -1;
}

console.log(
	solution(
		[
			[1, 1, 8, 4],
			[2, 2, 4, 9],
			[3, 6, 9, 8],
			[6, 3, 7, 7],
		],
		9,
		7,
		6,
		1
	)
);
console.log(
	solution(
		[
			[1, 1, 7, 4],
			[3, 2, 5, 5],
			[4, 3, 6, 9],
			[2, 6, 8, 8],
		],
		1,
		3,
		7,
		8
	)
);
console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7));
