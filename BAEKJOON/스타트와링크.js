const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [[N], ...map] = input.map((v) => v.split(" ").map((v) => Number(v)));
let visited = Array.from({ length: N }, () => 0);
let visited2 = Array.from({ length: N / 2 }, () => 0);
let prevArr = [];
let answer = [];

function calc(arr, arr2) {
	let sum = 0;
	let sum2 = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			sum += map[arr[i]][arr[j]] + map[arr[j]][arr[i]];
			sum2 += map[arr2[i]][arr2[j]] + map[arr2[j]][arr2[i]];
		}
	}
	answer.push(Math.abs(sum - sum2));
}

function dfs(arr, start) {
	if (arr.length === N / 2) {
		let arr2 = [];
		for (let i = 0; i < N; i++) {
			if (visited[i] === 0) arr2.push(i);
		}
		calc(arr, arr2);
		if (answer[answer.length - 1] === 0) {
			console.log(0);
			process.exit();
		}
	}
	for (start; start < N; start++) {
		if (visited[start] === 0) {
			visited[start] = 1;
			dfs([...arr, start], start + 1);
			visited[start] = 0;
		}
	}
}

dfs([], 0);
console.log(Math.min(...answer));

// 0 1 2 3 4 5
// 0 1 3 2 4 5
// 0 1 4 2 3 5
// 0 1 5 2 3 4

// 01 10
// 02 20
// 12 21
