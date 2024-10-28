const [input, arr] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

let left = 0;
let right = input[1] - 1;
let sum = arr.slice(left, right + 1).reduce((a, b) => a + b);
let max = sum;
let cnt = 1;

for (let i = right; i < arr.length; i++) {
	sum += arr[++right];
	sum -= arr[left++];
	if (sum > max) {
		max = sum;
		cnt = 1;
	} else if (sum === max) cnt++;
}

console.log(max === 0 ? "SAD" : max + "\n" + cnt);
