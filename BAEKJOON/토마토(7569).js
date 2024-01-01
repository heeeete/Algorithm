const fs = require("fs");
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let map = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((v) => v.split(" ").map((v) => Number(v)));
[size] = map.splice(0, 1);

let queue = [];
let visited = Array.from({ length: size[1] * size[2] }, () =>
	Array(size[0]).fill(0)
);

for (let i = 0; i < size[1] * size[2]; i++) {
	for (let j = 0; j < size[0]; j++) {
		if (map[i][j] === 1) {
			queue.push([i, j]);
			visited[i][j] = 1;
		}
	}
}

console.log(visited);
return;
while (queue.length) {
	let len = queue.length;
	for (let i = 0; i < len; i++) {
		const tomato = queue.shift();
		for (let j = 0; j < 4; j++) {
			let [y, x] = tomato;
			if (
				y + dy[i] >= 0 &&
				x + dx[i] >= 0 &&
				y + dy[i] < map.length &&
				x + dx[i] < map[0].length
			) {
				map[y + dy[i]][x + dx[i]] = 1;
				queue.push([y + dy[i], x + dx[i]]);
			}
		}
	}
}
