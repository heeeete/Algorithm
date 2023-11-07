const fs = require("fs");
const [N, M] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((v) => Number(v));
let arr = Array.from({ length: M }, () => 0);

function temp(num, depth) {
	if (depth === M) {
		console.log(arr.join(" "));
	} else {
		for (let i = num; i <= N; i++) {
			arr[depth] = i;
			temp(i + 1, depth + 1);
		}
	}
}

temp(1, 0);
