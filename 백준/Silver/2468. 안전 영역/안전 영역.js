let min = Infinity;
let max = -Infinity;
const [[N], ...map] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const dfs = (pos, height) => {
	for (let i = 0; i < 4; i++) {
		const nx = pos.x + dx[i];
		const ny = pos.y + dy[i];
		if (
			nx >= 0 &&
			ny >= 0 &&
			nx < N &&
			ny < N &&
			map[nx][ny] > height &&
			visited[nx + "," + ny] === undefined
		) {
			visited[nx + "," + ny] = 1;
			dfs({ x: nx, y: ny }, height);
		}
	}
};

let visited = {};
let count = 0;
let arr = [];
for (let i = 0; i <= 100; i++) {
	for (let j = 0; j < N; j++) {
		for (let k = 0; k < N; k++) {
			if (visited[j + "," + k] === undefined && map[j][k] > i) {
				visited[j + "," + k] = 1;
				count++;
				dfs({ x: j, y: k }, i);
			}
		}
	}
	if (Object.keys(visited).length === 0) break;
	arr.push(count);
	visited = {};
	count = 0;
}
console.log(Math.max(...arr));
