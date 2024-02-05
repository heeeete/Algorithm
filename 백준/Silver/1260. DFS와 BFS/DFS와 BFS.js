const fs = require("fs");
let input = fs
	.readFileSync("/dev/stdin")
	.toString()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

let dfsPath = [];
let bfsPath = [];
let visited = Array.from({ length: input[0][0] + 1 }, () => 0);
let nodes = Array.from({ length: input[0][0] + 1 }, () => []);
for (let path of input) {
	if (path.length === 2) {
		nodes[path[0]].push(path[1]);
		nodes[path[1]].push(path[0]);
	}
}
nodes = nodes.map((e) => e.sort((a, b) => a - b));

function dfs(start) {
	for (let node of nodes[start]) {
		if (visited[node] === 0) {
			visited[node] = 1;
			dfsPath.push(node);
			dfs(node);
		}
	}
}

function bfs() {
	let queue = nodes[input[0][2]];

	while (queue.length) {
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			let node = queue.shift();
			if (visited[node] === 0) {
				visited[node] = 1;
				bfsPath.push(node);
				for (let e of nodes[node]) queue.push(e);
			}
		}
	}
}

visited[input[0][2]] = 1;
dfsPath.push(input[0][2]);
bfsPath.push(input[0][2]);
dfs(input[0][2]);
for (let i = 0; i < visited.length; i++) visited[i] = 0;
visited[input[0][2]] = 1;
bfs();
console.log(dfsPath.join(" "));
console.log(bfsPath.join(" "));
