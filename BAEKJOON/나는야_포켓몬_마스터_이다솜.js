const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ");

let map = new Map();
for (let i = 1; i <= Number(N); i++) {
	map.set(input[i], i);
}

let i = Number(N) + 1;
for (i; i < input.length; i++) {
	let v = input[i];
	if (!isNaN(v)) {
		v = Number(v);
		console.log(input[v]);
	} else {
		console.log(map.get(v));
	}
}
