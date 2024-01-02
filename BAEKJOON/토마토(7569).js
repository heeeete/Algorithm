const fs = require("fs");
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let map = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((v) => v.split(" ").map((v) => Number(v)));
[size] = map.splice(0, 1);

let answer = 0;
let deque = [];
let deque2 = [];

for (let i = 0; i < map.length; i++) {
	for (let j = 0; j < map[0].length; j++) {
		if (map[i][j] === 1) {
			deque.push([i, j]);
		}
	}
}

while (deque.length) {
	let len = deque.length;
	for (let i = 0; i < len; i++) {
		const tomato = deque.pop();
		let [y, x] = tomato;
		for (let j = 0; j < 4; j++) {
			if (
				y + dy[j] >= 0 &&
				x + dx[j] >= 0 &&
				y + dy[j] < map.length &&
				x + dx[j] < map[0].length &&
				map[y + dy[j]][x + dx[j]] === 0 &&
				~~(y / size[1]) === ~~((y + dy[j]) / size[1])
			) {
				map[y + dy[j]][x + dx[j]] = 1;
				deque2.push([y + dy[j], x + dx[j]]);
			}
		}
		if (y + size[1] < map.length && map[y + size[1]][x] === 0) {
			map[y + size[1]][x] = 1;
			deque2.push([y + size[1], x]);
		}
		if (y - size[1] >= 0 && map[y - size[1]][x] === 0) {
			map[y - size[1]][x] = 1;
			deque2.push([y - size[1], x]);
		}
	}
	deque = deque2.reverse();
	deque2 = [];
	if (deque.length) answer++;
}

for (let arr of map) {
	for (let n of arr) {
		if (n === 0) return console.log(-1);
	}
}

console.log(answer);
