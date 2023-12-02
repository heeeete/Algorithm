const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((v) => Number(v));
const map = input.slice(1).map((v) => v.split(""));
let minCnts = [];

function check(Y, X) {
	let W = 0,
		B = 0;
	for (let y = Y; y < Y + 8; y++) {
		let start = y % 2 === 0 ? "W" : "B";
		for (let x = X; x < X + 8; x++) {
			if (x % 2 === 0 && map[y][x] !== start) ++W;
			else if (x % 2 !== 0 && map[y][x] === start) ++W;
		}
	}
	for (let y = Y; y < Y + 8; y++) {
		let start = y % 2 === 0 ? "B" : "W";
		for (let x = X; x < X + 8; x++) {
			if (x % 2 === 0 && map[y][x] !== start) ++B;
			else if (x % 2 !== 0 && map[y][x] === start) ++B;
		}
	}

	if (W > B) minCnts.push(B);
	else minCnts.push(W);
}

for (let row = 0; row <= N - 8; row++) {
	for (let col = 0; col <= M - 8; col++) {
		check(row, col);
	}
}
console.log(Math.min(...minCnts));
