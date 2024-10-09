const fs = require("fs");
const arr = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

const card = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let [s, e] of arr) {
	while (s < e) {
		[card[s - 1], card[e - 1]] = [card[e - 1], card[s - 1]];
		s++;
		e--;
	}
}

console.log(card.join(" "));
