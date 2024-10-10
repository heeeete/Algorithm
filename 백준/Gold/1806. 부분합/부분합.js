const fs = require("fs");
const [f, arr] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

let minRange = Infinity;
let l = 0;
let r = 0;
let sum = arr[0];
while (l <= r && r < f[0]) {
	if (sum >= f[1]) {
		const range = r - l + 1;
		if (minRange > range) minRange = range;
		sum -= arr[l++];
	} else sum += arr[++r];
}

console.log(minRange === Infinity ? 0 : minRange);
