function solution(n) {
	var answer = [];
	let arr = Array.from(Array(n), () => Array(n).fill(0));
	let direction = [
		[1, 0],
		[0, 1],
		[-1, -1],
	];
	let num = 1;
	let y = 0,
		x = 0;

	for (let i = 0; i < n; i++) {
		const d = direction[i % 3];
		for (let j = 0; j < n; j++) {
			if (arr[y][x] === 0) {
				arr[y][x] = num++;
				if (y + d[0] < n && x + d[1] < n && arr[y + d[0]][x + d[1]] === 0) {
					y += d[0];
					x += d[1];
				} else {
					const q = direction[(i + 1) % 3];
					y += q[0];
					x += q[1];
					break;
				}
			}
		}
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i][j] !== 0) answer.push(arr[i][j]);
		}
	}

	return answer;
}