function solution(dirs) {
	let answer = 0;
	const map = Array.from(Array(21), () => Array(21).fill(0));
	let y = 10,
		x = 10;

	function check(dirY, dirX) {
		if (y + dirY < 0 || x + dirX < 0 || y + dirY > 20 || x + dirX > 20) return;

		y += dirY;
		x += dirX;
		if (dirY) {
			if (dirY > 0) {
				if (map[y - 1][x] === 0) {
					map[y - 1][x] = 1;
					answer++;
				}
			} else {
				if (map[y + 1][x] === 0) {
					map[y + 1][x] = 1;
					answer++;
				}
			}
		} else if (dirX) {
			if (dirX > 0) {
				if (map[y][x - 1] === 0) {
					map[y][x - 1] = 1;
					answer++;
				}
			} else {
				if (map[y][x + 1] === 0) {
					map[y][x + 1] = 1;
					answer++;
				}
			}
		}
	}

	for (let i = 0; i < dirs.length; i++) {
		if (dirs[i] === "U") check(-2, 0);
		else if (dirs[i] === "D") check(2, 0);
		else if (dirs[i] === "L") check(0, -2);
		else if (dirs[i] === "R") check(0, 2);
	}

	return answer;
}