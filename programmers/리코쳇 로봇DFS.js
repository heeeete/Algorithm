function solution(board) {
	const rows = board.length;
	const cols = board[0].length;
	const directions = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	]; // 오른쪽, 아래, 왼쪽, 위
	let start, end;
	let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

	board = board.map((row, y) => {
		return row.split("").map((cell, x) => {
			if (cell === "R") start = [y, x];
			if (cell === "G") end = [y, x];
			return cell;
		});
	});

	function dfs(y, x, count) {
		if (y === end[0] && x === end[1]) return count;
		if (visited[y][x]) return Infinity;

		visited[y][x] = true;
		let minMoves = Infinity;

		directions.forEach(([dy, dx]) => {
			let ny = y,
				nx = x,
				moves = 0;

			while (
				ny + dy >= 0 &&
				nx + dx >= 0 &&
				ny + dy < rows &&
				nx + dx < cols &&
				board[ny + dy][nx + dx] !== "D"
			) {
				ny += dy;
				nx += dx;
				moves = 1;
			}

			if (moves > 0 && !visited[ny][nx]) {
				minMoves = Math.min(minMoves, dfs(ny, nx, count + 1));
			}
		});

		visited[y][x] = false;
		console.log(visited);
		return minMoves;
	}

	const result = dfs(start[0], start[1], 0);
	return isFinite(result) ? result : -1;
}

// 테스트
console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
console.log(solution([".D.R", "....", ".G..", "...D"]));
