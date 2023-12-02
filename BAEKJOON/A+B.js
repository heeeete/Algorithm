const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", (line) => {
	const numArr = line.split(" ");
	const a = parseInt(numArr[0]);
	const b = parseInt(numArr[1]);
	console.log(a + b);
	rl.close();
});
