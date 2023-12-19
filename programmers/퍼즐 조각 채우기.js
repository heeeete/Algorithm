function movePuzzle(coordinate) {
	//맨 왼쪽으로 이동
	for (let i = 0; i < coordinate.length; i++) {
		let flag = 1;
		for (let k = 0; k < coordinate[i].length; k++)
			if (coordinate[i][k][1] === 0) flag = 0;
		while (flag) {
			for (let j = 0; j < coordinate[i].length; j++) {
				--coordinate[i][j][1];
				// console.log(coordinate[i][j]);
				if (coordinate[i][j][1] === 0) {
					flag = 0;
				}
			}
		}
	}

	//맨 위로 이동
	for (let i = 0; i < coordinate.length; i++) {
		let flag = 1;
		for (let k = 0; k < coordinate[i].length; k++)
			if (coordinate[i][k][0] === 0) flag = 0;
		while (flag) {
			for (let j = 0; j < coordinate[i].length; j++) {
				--coordinate[i][j][0];
				if (coordinate[i][j][0] === 0) flag = 0;
			}
		}
	}
}

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

function check(arr1, arr2, y, x) {
	for (let i = 0; i < arr1.length; i++) {
		arr1[i][0] += y;
		arr1[i][1] += x;
	}
	// console.log(arr1, "  ", arr2);
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < 2; j++) {
			if (arr1[i][j] !== arr2[i][j]) return false;
		}
	}
	return true;
}

function solution(game_board, table) {
	var answer = 0;
	var dx = [-1, 1, 0, 0];
	var dy = [0, 0, -1, 1];
	let coordinate = [];

	function moveCheck(i, j, rotateBoard, emptysCoordinate) {
		// console.log("START", coordinate[i], "   ", emptysCoordinate[j]);
		for (let k = 0; k < table.length; k++) {
			for (let q = 0; q < table[0].length; q++) {
				if (
					check(
						coordinate[i].map((e) => [...e]),
						emptysCoordinate[j],
						k,
						q
					)
				) {
					for (let idx of emptysCoordinate[j]) {
						rotateBoard[idx[0]][idx[1]] = 1;
					}
					// console.log(coordinate[i], "HAHA");
					flag = 1;
					answer += emptysCoordinate[j].length;
					coordinate.splice(i, 1);
					emptysCoordinate.splice(j, 1);
					return true;
				}
			}
		}
		return false;
	}

	function dfs() {
		let emptysCoordinate = [];
		let rotateBoard = game_board.map((e) => [...e]);

		for (let i = 0; i < 4; i++) {
			emptysCoordinate = boardDFS(rotateBoard);
			for (let k = 0; k < coordinate.length; k++) {
				for (let j = 0; j < emptysCoordinate.length; j++) {
					if (coordinate[k].length === emptysCoordinate[j].length) {
						// console.log(coordinate[k], " asd  ", emptysCoordinate[j]);
						if (moveCheck(k, j, rotateBoard, emptysCoordinate)) {
							k--;
							j--;
							break;
						}
					}
				}
			}
			rotateBoard = rotate90(rotateBoard);
		}
		console.log(coordinate, emptysCoordinate);
	}

	function boardDFS(arr) {
		let copyGame_board = arr.map((e) => [...e]);
		let emptyArr = [];
		let emptyArrs = [];

		function DFS(y, x) {
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
					DFS(y + dy[i], x + dx[i]);
				}
			}
		}

		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[0].length; j++) {
				if (copyGame_board[i][j] === 0) {
					DFS(i, j);
					emptyArrs.push(emptyArr);
					emptyArr = [];
				}
			}
		}
		return emptyArrs;
	}

	function tableDFS() {
		let puzzle = [];

		function DFS(y, x) {
			table[y][x] = 0;
			puzzle.push([y, x]);

			for (let i = 0; i < 4; i++) {
				if (
					y + dy[i] >= 0 &&
					y + dy[i] < table.length &&
					x + dx[i] >= 0 &&
					x + dx[i] < table[0].length &&
					table[y + dy[i]][x + dx[i]] === 1
				) {
					DFS(y + dy[i], x + dx[i]);
				}
			}
		}

		for (let i = 0; i < table.length; i++) {
			for (let j = 0; j < table[0].length; j++) {
				if (table[i][j] === 1) {
					DFS(i, j);
					coordinate.push(puzzle);
					puzzle = [];
				}
			}
		}
	}

	tableDFS();
	movePuzzle(coordinate);
	dfs();
	return answer;
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
console.log(
	solution(
		[
			[0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
			[1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
			[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
			[0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
			[0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
			[0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
			[0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
			[1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
			[0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0],
			[0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1],
			[0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		],
		[
			[1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1],
			[1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
			[1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
			[0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
			[1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0],
			[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
			[1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
			[1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
			[0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
			[1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
			[1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1],
		]
	)
);

// console.log(
// 	solution(
// 		[
// 			[0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
// 			[1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
// 			[0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
// 			[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
// 			[0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
// 			[0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
// 			[0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
// 			[0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
// 			[1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
// 			[0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0],
// 			[0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1],
// 			[0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
// 		],
// 		[
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
// 			[0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
// 		]
// 	)
// );

// 0
// 0
// 0
// 0
// 000

// 0000
// 0
// 0

// 000
//   0
//   0
//   0

//    0
//    0
// 0000
