const fs = require("fs");
const [[N], data, [M], targets] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

data.sort((a, b) => a - b);

for (let target of targets) console.log(binarySearch(target));

function binarySearch(target) {
	let start = 0;
	let end = data.length - 1;

	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		if (target < data[mid]) end = mid - 1;
		else if (target > data[mid]) start = mid + 1;
		else return 1;
	}
	return 0;
}
