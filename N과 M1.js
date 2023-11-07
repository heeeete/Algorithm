const fs = require("fs");
const [N, M] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((v) => Number(v));
let arr = Array.from({ length: M }, () => 0);
let visited = Array.from({ length: N }, () => 0);

function temp(depth) {
	if (depth === M) {
		console.log(arr.join(" "));
	} else {
		for (let i = 1; i <= N; i++) {
			if (visited[i - 1] === 0) {
				arr[depth] = i;
				visited[i - 1] = 1;
				temp(depth + 1);
				visited[i - 1] = 0;
			}
		}
	}
}

temp(0);
