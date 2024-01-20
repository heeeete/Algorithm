function solution(places) {
	var answer = [];
	var dx = [-1, 1, 0, 0];
	var dy = [0, 0, -1, 1];
	places = places.map((e) => e.map((e) => e.split("")));
	let persons = Array.from({ length: 5 }, () => []);

	for (let k = 0; k < 5; k++) {
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				if (places[k][i][j] === "P") persons[k].push([i, j]);
			}
		}
	}

	function bfs(i) {
		let len = persons[i].length;
		let temp = [];
		for (let j = 0; j < len; j++) {
			for (let z = 0; z < 2; z++) {
				if (z === 0) {
					const start = persons[i].shift();
					for (let k = 0; k < 4; k++) {
						const [y, x] = start;
						places[i][y][x] = "!";
						const my = y + dy[k];
						const mx = x + dx[k];
						if (
							my >= 0 &&
							mx >= 0 &&
							my < 5 &&
							mx < 5 &&
							(places[i][my][mx] === "O" || places[i][my][mx] === "P") &&
							places[i][my][mx] !== "!"
						) {
							if (places[i][my][mx] === "P") {
								return answer.push(0);
							}
							places[i][my][mx] = "!";
							temp.push([my, mx]);
						}
					}
				} else {
					let tempLen = temp.length;
					for (let p = 0; p < tempLen; p++) {
						const [ty, tx] = temp.shift();
						for (let w = 0; w < 4; w++) {
							let tmy = ty + dy[w];
							let tmx = tx + dx[w];
							if (
								tmy >= 0 &&
								tmx >= 0 &&
								tmy < 5 &&
								tmx < 5 &&
								places[i][tmy][tmx] === "P" &&
								places[i][tmy][tmx] !== "!"
							) {
								return answer.push(0);
							}
						}
					}
				}
			}
		}

		answer.push(1);
	}

	for (let i = 0; i < 5; i++) {
		bfs(i);
	}

	return answer;
}
