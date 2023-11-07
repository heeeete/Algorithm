const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let ceremony = [];
let cnt = 0;

console.log(eval("(2 + 3 * 3) * 2"));
return;

for (let i = 0; i < input.length; i++) {
	let ch = input[0];
	if (input[i] === ch) {
		++cnt;
	}
	if ((ch === "(" && input[i] === ")") || (ch === "[" && input[i] === "]")) {
		--cnt;
		if (cnt === 0) {
			let temp = input.substring(0, i + 1);
			input = input.slice(i + 1);
			ceremony.push(temp);
			i = -1;
		}
	}
}
let deep = 0;

for (let i = 0; i < ceremony.length; i++) {
	for (let j = 0; j < ceremony[i].length; j++) {}
}

let answer = "";
let sum = 0;
let sums = [];

for (let i = 0; i < ceremony.length; i++) {
	for (let j = 0; j < ceremony[i].length; j++) {
		if (
			(ceremony[i][j] === "(" && ceremony[i][j + 1] === ")") ||
			(ceremony[i][j] === "[" && ceremony[i][j + 1] === "]")
		) {
			// while (ceremony[i][j + 1] !== "]" || ceremony[i][j + 1] !== ")")
			for (let k = j; ; k++) {
				if (ceremony[i][k] === "(" && ceremony[i][k + 1] === ")") {
					k += 1;
					// sum += 2;
					answer += "2 +";
				} else if (ceremony[i][k] === "[" && ceremony[i][k + 1] === "]") {
					k += 1;
					// sum += 3;
					answer += "3 +";
				} else {
					j += k + 1;
					break;
				}
			}
			if (ceremony[i][j - 1] === ")") answer += " * 2";
			else answer += " * 3";
			console.log(j, ceremony[i][j]);
		}
		console.log(j, ceremony[i][j - 1]);
		if (j === ceremony[i].length - 1 && ceremony[i][j] === ")") {
			console.log("마지막");
			answer += " * 2";
		} else if (j === ceremony[i].length - 1 && ceremony[i][j] === "]")
			answer += " * 3";
	}
	// sums.push(sum);
	sums.push(answer);
	answer = "";
	sum = 0;
}
console.log(ceremony);

console.log(sums);

//(([()[]][]))([])[()]
