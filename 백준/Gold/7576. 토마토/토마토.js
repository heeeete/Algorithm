const q = [];
const [input, ...map] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map((e, x) =>
		e.split(" ").map((e, y) => {
			const n = Number(e);
			if (n === 1) q.push({ x: x - 1, y: y });
			return n;
		})
	);
const [M, N] = input;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let idx = 0;
let day = -1;
let newAddCount = 1;

while (newAddCount) {
	let len = q.length;
	newAddCount = 0;
	for (; idx < len; idx++) {
		const pos = q[idx];
		for (let i = 0; i < 4; i++) {
			const nx = pos.x + dx[i];
			const ny = pos.y + dy[i];
			if (nx >= 0 && ny >= 0 && nx < N && ny < M && map[nx][ny] === 0) {
				map[nx][ny] = 1;
				q.push({ x: nx, y: ny });
				newAddCount++;
			}
		}
	}
	day++;
}

console.log(
	map.map((e) => e.every((e) => e === 1 || e === -1)).every((e) => e === true) ? day : -1
);
