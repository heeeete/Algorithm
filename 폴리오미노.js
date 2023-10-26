const fs = require("fs");
let map = fs.readFileSync("/dev/stdin").toString().trim().split(".");
console.log(map);
return;
let answer = "";

const check = (idx, bool) => {
	if (idx % 4 === 0) while (idx--) answer += "A";
	else if (idx % 2 === 0)
		while (idx) {
			if (idx <= 2) answer += "B";
			else answer += "A";
			--idx;
		}
	else {
		console.log(-1);
		process.exit();
	}
	if (bool) answer += ".";
};

while (1) {
	let idx = map.indexOf(".", 0);
	if (idx !== -1) check(idx, true);
	else if (idx === -1) {
		check(map.length, false);
		break;
	}
	map = map.substring(idx + 1);
}
console.log(answer);
