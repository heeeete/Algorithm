function solution(info, edges) {
	const answer = [];
	const nodeList = Array.from(Array(info.length), () => []);
	const visited = {};

	for (let [parent, child] of edges) nodeList[parent].push(child);

	function dfs(nodes, sheep, wolf) {
		if (sheep > wolf) {
			for (let node of nodes) {
				if (!visited[node]) {
					visited[node] = 1;
					if (info[node] === 0)
						dfs([...nodes, ...nodeList[node]], sheep + 1, wolf);
					else dfs([...nodes, ...nodeList[node]], sheep, wolf + 1);
					visited[node] = 0;
				}
			}
		}
		answer.push(sheep);
	}

	dfs([...nodeList[0]], 1, 0);
	return Math.max(...answer);
}
