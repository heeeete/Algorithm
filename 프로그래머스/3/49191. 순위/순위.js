function solution(n, results) {
	var answer = 0;
	const graph = Array.from(Array(n), () => Array(n).fill(-Infinity));
	for (let [winner, loser] of results) {
		graph[winner - 1][loser - 1] = 1;
		graph[loser - 1][winner - 1] = -1;
	}
	for (let i = 0; i < n; i++) graph[i][i] = 0;

	//i = 경유지
	//j = 출발지
	//k = 목적지
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < n; k++) {
				if (graph[j][k] === -Infinity && graph[j][i] !== -Infinity) {
					if (graph[j][i] === 1 && graph[i][k] === 1) graph[j][k] = 1;
					else if (graph[j][i] === -1 && graph[i][k] === -1) graph[j][k] = -1;
				}
			}
		}
	}

	for (let player of graph) {
		let flag = 1;
		for (let result of player) {
			if (result === -Infinity) {
				flag = 0;
				break;
			}
		}
		if (flag) answer++;
	}

	return answer;
}