const readline = require("readline");
const { PassThrough } = require("stream");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let Arr = [];
let count = -1;
let flag = 0;
let num;
let i;

rl.on("line", (N) => {
	if (flag === 0) {
		num = parseInt(N);
	} else if (flag === 1) {
		N.split(" ").map((i) => {
			Arr.push(parseInt(i));
			count++;
		});
	}
	if (count === num) {
		i = parseInt(N);
		rl.close();
	}
	flag = 1;
}).on("close", () => {
	let cnt = Arr.filter((ele) => i === ele).length - 1;
	console.log(cnt);
});
