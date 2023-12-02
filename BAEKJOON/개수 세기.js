const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let Arr = [];
let count = -1;
let flag = 0;
let arrValue;
let find;
rl.on("line", (N) => {
	if (flag === 0) {
		arrValue = parseInt(N);
	} else if (flag === 1) {
		N.split(" ").map((find) => {
			Arr.push(parseInt(find));
			count++;
		});
	}
	if (count === arrValue) {
		find = parseInt(N);
		rl.close();
	}
	flag = 1;
}).on("close", () => {
	let cnt = Arr.filter((ele) => find === ele).length - 1;
	console.log(cnt);
});
