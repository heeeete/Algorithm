const [input, arr] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

let left = 1;
let right = 100000 * 10000;
const a = [];

while (left <= right) {
	let mid = Math.floor((left + right) / 2);
	let blue = 1;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] > mid) {
			blue = Infinity;
			break;
		}
		if (sum > mid) {
			blue++;
			sum = arr[i];
		}
	}
	if (sum > mid) blue++;

	if (blue > input[1]) left = mid + 1;
	else if (blue < input[1]) {
		a.push(mid);
		right = mid - 1;
	} else {
		right = mid - 1;
		a.push(mid);
	}
}

console.log(Math.min(...a));