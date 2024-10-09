const fs = require("fs");
const [N, ...arr] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

const balls = [];
const colorSize = {};
const answer = Array(N).fill(0);

for (let i = 0; i < N; i++) {
	const [color, size] = arr[i];
	balls.push({
		color,
		size,
		idx: i,
	});
}

balls.sort((a, b) => a.size - b.size);

let j = 0;
let total = 0;
for (let i = 0; i < N; i++) {
	const { color, size, idx } = balls[i];
	while (balls[j].size < size) {
		const { color: prevColor, size: prevSize } = balls[j];
		total += prevSize;
		if (colorSize[prevColor]) colorSize[prevColor] += prevSize;
		else colorSize[prevColor] = prevSize;
		j++;
	}
	answer[idx] = total - (colorSize[color] ? colorSize[color] : 0);
}

console.log(answer.join("\n"));
