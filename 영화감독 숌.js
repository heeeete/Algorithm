const fs = require("fs");
const [N] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((v) => Number(v));

let cnt = 0;
let endNum = 666;
for (; true; endNum++) {
	let temp = endNum.toString();
	if (temp.includes("666")) cnt++;
	if (cnt === N) break;
}
console.log(endNum);
