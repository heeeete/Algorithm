function solution(tickets) {
	var answer = [];
	var visited = Array.from({ length: tickets.length }, () => 0);

	function dfs(path) {
		if (path.length === tickets.length + 1) return answer.push(path);

		for (let i = 0; i < tickets.length; i++) {
			if (visited[i] !== 1) {
				const [start, end] = tickets[i];
				if (path[path.length - 1] === start) {
					visited[i] = 1;
					dfs([...path, end]);
					visited[i] = 0;
				}
			}
		}
	}

	dfs(["ICN"]);
	return answer.sort()[0];
}

solution([
	["ICN", "SFO"],
	["ICN", "ATL"],
	["SFO", "ATL"],
	["ATL", "ICN"],
	["ATL", "SFO"],
]);
