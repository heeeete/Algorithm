function solution(info, edges) {
	const answer = [];
	const nodes = Array.from(Array(info.length), () => []);
	const visited = {};
	for (let [s, e] of edges) nodes[s].push(e);

	function dfs(arr, sheep, wolf) {
		if (sheep > wolf) {
			for (let node of arr) {
				if (!visited[node]) {
					visited[node] = 1;
					if (info[node] === 0) dfs([...arr, ...nodes[node]], sheep + 1, wolf);
					else dfs([...arr, ...nodes[node]], sheep, wolf + 1);
					visited[node] = 0;
				}
			}
			answer.push(sheep);
		}
	}

	dfs([...nodes[0]], 1, 0);

	return Math.max(...answer);
}
