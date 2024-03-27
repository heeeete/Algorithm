function solution(n, edge) {
	var answer = 0;
	const nodes = Array.from(Array(n + 1), () => []);
	const visited = Array.from(Array(n + 1), () => 0);
	const distance = Array.from(Array(n + 1), () => 0);
	for (let [start, end] of edge) {
		nodes[start].push(end);
		nodes[end].push(start);
	}

	const queue = nodes[1];
	let dis = 0;
	visited[1] = 1;
	while (queue.length) {
		const len = queue.length;
		for (let i = 0; i < len; i++) {
			let flag = 1;
			const idx = queue.shift();
			visited[idx] = 1;
			for (let j = 0; j < nodes[idx].length; j++) {
				const node = nodes[idx][j];
				if (visited[node] === 0 && queue.indexOf(node) === -1) {
					queue.push(node);
					visited[node] = 1;
					flag = 0;
				}
			}
			if (flag) {
				distance[idx] = dis + 1;
			}
		}
		dis++;
	}

	distance.sort((a, b) => b - a);
	const max = distance[0];
	for (let i = 0; i < distance.length; i++) {
		if (max === distance[i]) answer++;
		else break;
	}

	return answer;
}