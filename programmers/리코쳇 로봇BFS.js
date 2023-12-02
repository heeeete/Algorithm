function solution(board) {
	var answer = 0;
	var directionX = [-1, 1, 0, 0];
	var directionY = [0, 0, -1, 1];
	var queue = [];
	board = board.map((e) => e.split(""));
	board.forEach((element, Y) => {
		var X = element.indexOf("R");
		if (X !== -1) {
			queue.push([Y, X]);
			board[Y][X] = "@";
		}
	});

	for (; queue.length !== 0; ) {
		const len = queue.length;
		for (let i = 0; i < len; i++) {
			const [y, x] = queue.shift();
			for (let j = 0; j < 4; j++) {
				let currY = y;
				let currX = x;
				while (
					currX + directionX[j] >= 0 &&
					currY + directionY[j] >= 0 &&
					currX + directionX[j] < board[0].length &&
					currY + directionY[j] < board.length &&
					board[currY + directionY[j]][currX + directionX[j]] !== "D"
				) {
					currX += directionX[j];
					currY += directionY[j];
				}
				if (board[currY][currX] === "G") return answer + 1;
				else if (board[currY][currX] !== "@") {
					queue.push([currY, currX]);
					board[currY][currX] = "@";
				}
			}
		}
		answer++;
	}
	return -1;
}
