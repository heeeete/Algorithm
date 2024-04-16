function solution(edges) {
	const answer = [0, 0, 0, 0];
	const graph = {};
	let vertax;
	for (let [s, e] of edges) {
		graph[s] ? graph[s][0]++ : (graph[s] = [1, 0]);
		graph[e] ? graph[e][1]++ : (graph[e] = [0, 1]);
	}

	for (let node in graph) {
		if (graph[node][0] >= 2 && graph[node][1] === 0) {
			vertax = Number(node);
			continue;
		}
		if (graph[node][0] === 0) {
			answer[2]++;
			continue;
		}
		if (graph[node][0] === 2 && graph[node][1] >= 2) {
			answer[3]++;
			continue;
		}
	}

	return [
		vertax,
		graph[vertax][0] - (answer[2] + answer[3]),
		answer[2],
		answer[3],
	];
}