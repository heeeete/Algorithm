const fs = require("fs");
const [[cnt], ...input] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));
const farm = Array.from(Array(cnt), () => []);
let i = 0;
let j = 0;
while (input[i]) {
	farm[j].push(input[i]);
	i++;
	while (input[i] && input[i].length === 2) farm[j].push(input[i++]);
	j++;
}

function check(arr) {
	let answer = 0;
	const visited = Array.from(Array(arr[0][1]), () => Array(arr[0][0]).fill(0));
	const farm = Array.from(Array(arr[0][1]), () => Array(arr[0][0]).fill(0));
	for (let i = 1; i < arr.length; i++) {
		farm[arr[i][1]][arr[i][0]] = 1;
	}

	function bfs(x, y) {
		if (visited[y][x] === 1) return;
		answer++;
		const dirY = [-1, 1, 0, 0];
		const dirX = [0, 0, 1, -1];
		const arr = [[y, x]];

		visited[y][x] = 1;
		while (arr.length) {
			const len = arr.length;
			for (let i = 0; i < len; i++) {
				const curr = arr.shift();
				for (let j = 0; j < 4; j++) {
					let [dy, dx] = curr;
					dy += dirY[j];
					dx += dirX[j];
					if (
						dy >= 0 &&
						dx >= 0 &&
						dy < farm.length &&
						dx < farm[0].length &&
						farm[dy][dx] === 1 &&
						visited[dy][dx] === 0
					) {
						visited[dy][dx] = 1;
						arr.push([dy, dx]);
					}
				}
			}
		}
	}

	for (let i = 1; i < arr.length; i++) {
		const [x, y] = arr[i];
		bfs(x, y);
	}

	console.log(answer);
}

for (let arr of farm) {
	check(arr);
}