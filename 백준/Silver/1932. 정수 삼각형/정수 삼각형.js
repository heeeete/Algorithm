const [n, ...input] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

for (let i = input.length - 2; i >= 0; i--) {
	for (let j = 0; j < input[i].length; j++) {
		input[i][j] += Math.max(input[i + 1][j], input[i + 1][j + 1]);
	}
}

console.log(input[0][0]);
