const [input, ...map] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split("").map((e) => Number(e)));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const q = [[0, 0]];
let count = 1;

while (q.length) {
	const len = q.length;
	for (let i = 0; i < len; i++) {
		const curr = q.shift();
		map[curr[0]][curr[1]] = 0;
		for (let j = 0; j < 4; j++) {
			const nx = curr[0] + dx[j];
			const ny = curr[1] + dy[j];
			if (nx >= 0 && ny >= 0 && nx < map.length && ny < map[0].length && map[nx][ny] === 1) {
				if (nx === map.length - 1 && ny === map[0].length - 1) return console.log(count + 1);
				map[nx][ny] = 0;
				q.push([nx, ny]);
			}
		}
	}
	count++;
}
