function rotate90(origiArr) {
	let box_max_index = origiArr.length - 1;
	let newArr = origiArr.map((e) => [...e]);

	for (var i = 0; i < origiArr.length; i++) {
		for (var k = 0; k < origiArr[i].length; k++) {
			var after_row = k;
			var after_col = box_max_index - i;

			newArr[after_row][after_col] = origiArr[i][k];
		}
	}
	return newArr;
}

function ch(arr1, arr2, y, x) {
	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		arr1[i][0] += y;
		arr1[i][1] += x;
	}
	// console.log(arr1, "       ", arr2);

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < 2; j++) {
			if (arr1[i][j] !== arr2[i][j]) return false;
		}
	}

	return true;
}

function solution(game_board, table) {
	var answer = 0;
	let copyTable = table.map((e) => [...e]);
	var dx = [-1, 1, 0, 0];
	var dy = [0, 0, -1, 1];
	let left = 0,
		right = 0,
		up = 0,
		down = 0;
	let pieces = [];
	let coordinate = [];
	let emptyPieces = [];
	let piece = 0;
	let emptysArr = [];

	function move(i, j, rotateBoard) {
		for (let k = 0; k < game_board.length; k++) {
			for (let q = 0; q < game_board[0].length; q++) {
				if (
					ch(
						coordinate[i].map((e) => [...e]),
						emptysArr[j],
						k,
						q
					)
				) {
					for (let idx of emptysArr[j]) {
						rotateBoard[idx[0]][idx[1]] = 1;
					}
					flag = 1;
					answer += emptysArr[j].length;
					coordinate.splice(i, 1);
					emptysArr.splice(j, 1);
					return true;
				}
			}
		}
		return false;
	}

	function dfs() {
		let rotateBoard = game_board.map((e) => [...e]);

		for (let i = 0; i < 4; i++) {
			boardDFS(rotateBoard);
			for (let q = 0; q < emptysArr.length; q++) {
				emptysArr[q].sort((a, b) => {
					if (a[0] === b[0]) {
						return a[1] - b[1];
					}
					return a[0] - b[0];
				});
			}
			for (let k = 0; k < coordinate.length; k++) {
				for (let j = 0; j < emptysArr.length; j++) {
					if (coordinate[k].length === emptysArr[j].length) {
						if (move(k, j, rotateBoard)) break;
					}
				}
			}
			rotateBoard = rotate90(rotateBoard);
		}
	}

	function boardDFS(arr) {
		let copyGame_board = arr.map((e) => [...e]);
		let emptyArr = [];
		emptysArr = [];

		function boardCheck(y, x) {
			copyGame_board[y][x] = 1;
			emptyArr.push([y, x]);

			for (let i = 0; i < 4; i++) {
				if (
					y + dy[i] >= 0 &&
					y + dy[i] < copyGame_board.length &&
					x + dx[i] >= 0 &&
					x + dx[i] < copyGame_board[0].length &&
					copyGame_board[y + dy[i]][x + dx[i]] === 0
				) {
					boardCheck(y + dy[i], x + dx[i]);
				}
			}
		}

		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[0].length; j++) {
				if (copyGame_board[i][j] === 0) {
					boardCheck(i, j);
					emptysArr.push(emptyArr);
					emptyArr = [];
				}
			}
		}
	}

	function pieceSizeCheck(y, x) {
		copyTable[y][x] = 0;

		for (let i = 0; i < 4; i++) {
			if (
				y + dy[i] >= 0 &&
				y + dy[i] < table.length &&
				x + dx[i] >= 0 &&
				x + dx[i] < table[0].length &&
				copyTable[y + dy[i]][x + dx[i]] === 1
			) {
				if (i === 0) left++;
				else if (i === 1) right++;
				else if (i === 2) up++;
				else down++;
				pieceSizeCheck(y + dy[i], x + dx[i]);
			}
		}
	}

	function copyPiece(y, x, copyY, copyX) {
		if (!piece) {
			piece = Array.from({ length: up + down + 1 }, () =>
				Array(left + right + 1).fill(0)
			);
		}
		if (copyX >= piece[0].length) {
			copyY++;
			copyX = 0;
		}
		if (left) {
			copyX += left;
			left = 0;
		}
		piece[copyY][copyX] = 1;
		table[y][x] = 0;
		for (let i = 0; i < 4; i++) {
			if (
				y + dy[i] >= 0 &&
				y + dy[i] < table.length &&
				x + dx[i] >= 0 &&
				x + dx[i] < table[0].length &&
				table[y + dy[i]][x + dx[i]] === 1
			)
				copyPiece(y + dy[i], x + dx[i], copyY + dy[i], copyX + dx[i]);
		}
	}

	for (let i = 0; i < table.length; i++) {
		for (let j = 0; j < table[0].length; j++) {
			if (copyTable[i][j] === 1) {
				pieceSizeCheck(i, j);
				copyPiece(i, j, 0, 0);
				pieces.push(piece);
				piece = 0;
			}
			positionReset();
		}
	}

	pieces.forEach((e, idx) => {
		if (coordinate[idx] === undefined) coordinate[idx] = [];
		for (let i = 0; i < e.length; i++) {
			for (let j = 0; j < e[0].length; j++) {
				if (e[i][j] === 1) coordinate[idx].push([i, j]);
			}
		}
	});
	coordinate = coordinate.map((e) =>
		e.sort((a, b) => {
			if (a[0] === b[0]) {
				return a[1] - b[1];
			}
			return a[0] - b[0];
		})
	);

	dfs();
	return answer;

	function positionReset() {
		left = 0;
		right = 0;
		up = 0;
		down = 0;
	}
}

console.log(
	solution(
		[
			[1, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 1, 0],
			[0, 1, 1, 0, 0, 1],
			[1, 1, 0, 1, 1, 1],
			[1, 0, 0, 0, 1, 0],
			[0, 1, 1, 1, 0, 0],
		],
		[
			[1, 0, 0, 1, 1, 0],
			[1, 0, 1, 0, 1, 0],
			[0, 1, 1, 0, 1, 1],
			[0, 0, 1, 0, 0, 0],
			[1, 1, 0, 1, 1, 0],
			[0, 1, 0, 0, 0, 0],
		]
	)
);
