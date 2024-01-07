function solution(n, edge) {
	var answer = 0;
	var nodes = Array.from({ length: n + 1 }, () => []);
	var visited = Array.from({ length: n + 1 }, () => 0);
	var distance = Array.from({ length: n + 1 }, () => 0);

	for (let v of edge) {
		nodes[v[0]].push(v[1]);
		nodes[v[1]].push(v[0]);
	}
	var queue = nodes[1];

	let dis = 0;
	while (queue.length) {
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			const idx = queue.shift();
			visited[idx] = 1;
			let flag = 0;
			for (let j = 0; j < nodes[idx].length; j++) {
				if (
					visited[nodes[idx][j]] === 0 &&
					nodes[idx][j] !== 1 &&
					queue.indexOf(nodes[idx][j]) === -1
				) {
					flag = 1;
					visited[nodes[idx][j]] = 1;
					queue.push(nodes[idx][j]);
				}
			}
			if (!flag) {
				distance[idx] = dis + 1;
			}
		}
		dis++;
	}

	let farDis = Math.max(...distance);
	for (let dis of distance) {
		if (dis === farDis) answer++;
	}
	return answer;
}

console.log(
	solution(6, [
		[3, 6],
		[4, 3],
		[3, 2],
		[1, 3],
		[1, 2],
		[2, 4],
		[5, 2],
	])
);
