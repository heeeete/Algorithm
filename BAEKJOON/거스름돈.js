const fs = require("fs");
let [cm] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((v) => Number(v));

if (cm <= 0 || cm === 1 || cm === 3) {
	return console.log(-1);
}

let cnt = 0;

while (1) {
	if (cm % 5 === 0) {
		while (cm) {
			cnt = cm / 5;
			break;
		}
		break;
	} else {
		while (cm) {
			cnt = Math.floor(cm / 5);
			cm = cm % 5;
			while (cm % 2 !== 0) {
				--cnt;
				cm += 5;
			}
			cnt = cnt + cm / 2;
			break;
		}
		break;
	}
}

console.log(cnt);
