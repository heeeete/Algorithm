function solution(edges) {
	const answer = [0, 0, 0, 0];
	let nodeCnt = 0;
	for (let [a, b] of edges)
		nodeCnt = a > b ? (nodeCnt < a ? a : nodeCnt) : nodeCnt < b ? b : nodeCnt;
	const nodes = Array.from(Array(nodeCnt + 1), () => []);
	const enterNodeCnt = Array.from(Array(nodeCnt + 1), () => 0);
	let vertax = 1;
	for (let [s, e] of edges) {
		nodes[s].push(e);
		enterNodeCnt[e]++;
	}

	for (let i = 0; i < nodes.length; i++)
		if (nodes[i].length > 1 && !enterNodeCnt[i]) {
			vertax = i;
			answer[0] = vertax;
			break;
		}

	function check(sNode, pNode, idx) {
		while (1) {
			if (nodes[idx].length === 2) return answer[3]++;
			if (sNode === idx && pNode !== null) return answer[1]++;
			if (!nodes[idx].length) return answer[2]++;
			idx = nodes[idx][0];
			pNode = idx;
		}
	}

	for (let i = 0; i < nodes[vertax].length; i++) {
		check(nodes[vertax][i], null, nodes[vertax][i]);
	}

	return answer;
}