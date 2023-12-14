function solution(n, wires) {
	var answer = -1;
	let tree = Array.from(Array(n + 1), () => []);
	wires.map((element) => {
		let [a, b] = element;
		tree[a].push(b);
		tree[b].push(a);
	});

	function searchTree(root, except) {
		let visited = Array.from({ length: n + 1 }, () => 0);
		visited[root] = 1;
		let queue = [root];
		let cnt = 0;

		while (queue.length) {
			let idx = queue.pop();
			tree[idx].forEach((ele) => {
				if (visited[ele] === 0 && ele !== except) {
					visited[ele] = 1;
					queue.push(ele);
				}
			});
			cnt++;
		}
		return cnt;
	}

	let minCnt = Infinity;
	wires.forEach((element) => {
		const [a, b] = element;
		let cnt = searchTree(a, b) - searchTree(b, a);
		cnt = Math.abs(cnt);
		minCnt = minCnt > cnt ? cnt : minCnt;
	});
	return minCnt;
}

console.log(
	solution(9, [
		[1, 3],
		[2, 3],
		[3, 4],
		[4, 5],
		[4, 6],
		[4, 7],
		[7, 8],
		[7, 9],
	])
);
console.log(
	solution(7, [
		[1, 2],
		[2, 7],
		[3, 7],
		[3, 4],
		[4, 5],
		[6, 7],
	])
);
console.log(
	solution(4, [
		[1, 2],
		[2, 3],
		[3, 4],
	])
);
