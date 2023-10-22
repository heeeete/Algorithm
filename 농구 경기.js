const { exit } = require("process");
const readline = require("readline");
const { addAbortSignal } = require("stream");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let flag = 0;
let count = 0;
let i;
let arr = [];
let countObj = {};

rl.on("line", (line) => {
	if (flag === 0) {
		i = parseInt(line);
		if (i < 1 || i > 150 || line.length > 30) exit(0);
		flag = 1;
	} else if (flag === 1) {
		arr.push(line);
		count++;
	}
	if (i === count) rl.close();
}).on("close", () => {
	arr.map((str) => {
		if (countObj[str[0]] === undefined) {
			countObj[str[0]] = 0;
		}
		countObj[str[0]]++;
	});
	arr = [];
	for (const [key, value] of Object.entries(countObj).sort()) {
		if (value >= 5) arr.push(key);
	}
	arr = arr.join("");
	if (!arr.length) console.log("PREDAJA");
	else console.log(arr);
});
