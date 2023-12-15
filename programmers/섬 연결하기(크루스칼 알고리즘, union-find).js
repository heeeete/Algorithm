// 노드의 부모가 자기 자신일때까지 재귀호출
function getParent(parent, x) {
	if (parent[x] === x) return x;
	return getParent(parent, parent[x]);
}

// 두 노드의 부모를 찾고 두 노드 중 부모의 크기가 작은 값을 큰 노드의 부모로 넣어준다. 이렇게 하면 트리의 줄어들어 성능이 좋아짐
function unionParent(parent, a, b) {
	const aParent = getParent(parent, a);
	const bParent = getParent(parent, b);
	if (aParent < bParent) parent[bParent] = aParent;
	else parent[aParent] = bParent;
}

// 두 노드의 부모가 같으면 사이클구조가 형성이 돼서 서로 연결하지 않음
function findParent(parent, a, b) {
	const aParent = getParent(parent, a);
	const bParent = getParent(parent, b);
	if (aParent === bParent) return false;
	else return true;
}

function solution(n, costs) {
	var answer = 0;
	let parent = [];
	for (let i = 0; i < n; i++) parent.push(i);
	costs.sort((a, b) => a[2] - b[2]);

	for (let cost of costs) {
		if (findParent(parent, cost[0], cost[1])) {
			unionParent(parent, cost[0], cost[1]);
			answer += cost[2];
		}
	}
	return answer;
}

console.log(
	solution(4, [
		[0, 1, 1],
		[0, 2, 2],
		[1, 2, 5],
		[1, 3, 1],
		[2, 3, 8],
	])
);
