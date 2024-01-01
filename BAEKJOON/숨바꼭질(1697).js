const fs = require("fs");
let [N, M] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((v) => Number(v));
let answer = 0;
let visited = Array.from({ length: 100001 }, () => 0);
let queue = [N];
if (N === M) return console.log(0);

while (queue.length) {
	let len = queue.length;
	for (let i = 0; i < len; i++) {
		const dis = queue.shift();
		for (let t of [dis + 1, dis - 1, dis * 2]) {
			if (t >= 0 && visited[t] === 0) {
				if (t === M) return console.log(answer + 1);
				queue.push(t);
				visited[t] = 1;
			}
		}
	}
	answer++;
}

console.log(-1);
