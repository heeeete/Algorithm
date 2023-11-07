const fs = require("fs");
const [N, M] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((v) => Number(v));
let arr = Array.from({ length: M }, () => 0);
let arr2 = "";

function temp(depth) {
	if (depth === M) arr2 += arr.join(" ") + "\n";
	else {
		for (let i = 1; i <= N; i++) {
			arr[depth] = i;
			temp(depth + 1);
		}
	}
}
temp(0);
console.log(arr2);
