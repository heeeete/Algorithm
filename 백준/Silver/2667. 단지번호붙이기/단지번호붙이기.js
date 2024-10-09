const fs = require("fs");
const [N, ...map] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e, idx) => (idx !== 0 ? e.split("") : e));

const dirX = [0, 1, 0, -1];
const dirY = [-1, 0, 1, 0];
const len = map.length;
const q = [];
const answer = [];
let total = 0;

for (let mapI = 0; mapI < len; mapI++) {
	for (let mapJ = 0; mapJ < len; mapJ++) {
		if (map[mapI][mapJ] === "1") {
			let cnt = 1;
			total++;
			q.push([mapI, mapJ]);
			map[mapI][mapJ] = "2";
			while (q.length) {
				const l = q.length;
				for (let i = 0; i < l; i++) {
					const curr = q.shift();
					for (let j = 0; j < 4; j++) {
						const mY = curr[0] + dirY[j];
						const mX = curr[1] + dirX[j];
						if (
							mY >= 0 &&
							mX >= 0 &&
							mY < len &&
							mX < len &&
							map[mY][mX] === "1"
						) {
							map[mY][mX] = "2";
							cnt++;
							q.push([mY, mX]);
						}
					}
				}
			}
			answer.push(cnt);
		}
	}
}

console.log(total + "\n" + answer.sort((a, b) => a - b).join("\n"));