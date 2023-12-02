function solution(maps) {
	var answer = 0;
	var queue = [[0, 0]];
	const dx = [1, -1, 0, 0];
	const dy = [0, 0, 1, -1];
	maps[0][0] = 0;

	for (; queue.length; ) {
		const queLen = queue.length;
		// console.log(queue);
		for (let i = 0; i < queLen; i++) {
			const [y, x] = queue.shift();
			for (let j = 0; j < 4; j++) {
				var cy = y;
				var cx = x;
				if (
					cy + dy[j] >= 0 &&
					cx + dx[j] >= 0 &&
					cy + dy[j] < maps.length &&
					cx + dx[j] < maps[0].length &&
					maps[cy + dy[j]][cx + dx[j]] !== 0
				) {
					cx += dx[j];
					cy += dy[j];
				}

				if (cy === maps.length - 1 && cx === maps[0].length - 1)
					return answer + 2;
				else if (maps[cy][cx] !== 0) {
					queue.push([cy, cx]);
					maps[cy][cx] = 0;
				}
			}
		}
		answer++;
	}
	return -1;
}
console.log(
	solution([
		[1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 1, 1],
		[1, 1, 1, 0, 1],
		[0, 0, 0, 0, 1],
	])
);
