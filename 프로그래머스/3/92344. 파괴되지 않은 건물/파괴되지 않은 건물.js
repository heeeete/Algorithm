// skill = [1 = 적군 | 2 = 아군, row1, col1, row2, col2, value]
function solution(board, skill) {
	var answer = 0;
	const arr = Array.from(Array(board.length + 1), () =>
		Array(board[0].length + 1).fill(0)
	);
	for (let [type, y1, x1, y2, x2, val] of skill) {
		if (type === 1) val = -val;
		arr[y1][x1] += val;
		arr[y2 + 1][x2 + 1] += val;
		arr[y1][x2 + 1] += -val;
		arr[y2 + 1][x1] += -val;
	}

	for (let i = 0; i < arr[0].length; i++) {
		for (let j = 1; j < arr.length; j++) {
			arr[j][i] += arr[j - 1][i];
		}
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr[0].length; j++) {
			arr[i][j] += arr[i][j - 1];
		}
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			board[i][j] += arr[i][j];
		}
	}

	for (let arr of board) {
		answer += arr.filter((e) => e > 0).length;
	}
	return answer;
}