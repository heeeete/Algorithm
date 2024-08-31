const fs = require("fs");
const [input, trees] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

trees.sort((a, b) => b - a);

let left = trees[0];
let right = 0;
let temp = 0;

// 1 10
// 30

while (right <= left) {
	let sum = 0;
	mid = ~~((left + right) / 2);
	for (let tree of trees) {
		if (tree <= mid) break;
		sum += tree - mid;
	}
	// console.log(left, mid, right, sum);
	if (sum === input[1]) return console.log(mid);
	if (sum > input[1]) {
		right = mid + 1;
		temp = mid;
	} else left = mid - 1;
}

return console.log(temp);
