const fs = require("fs");
const [N, M] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((v) => Number(v));
function backtrack(arr, i) {
	if (arr.length === M) return console.log(arr.join(" "));
	for (i; i <= N; i++) backtrack([...arr, i], i);
}

backtrack([], 1);
