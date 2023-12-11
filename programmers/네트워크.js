function solution(n, computers) {
	var answer = 0;
	var visited = Array.from({ length: n }, () => 0);

	function dfs(arr, idx) {
		visited[idx] = 1;

		for (var i = 0; i < n; i++) {
			if (visited[i] === 0 && arr[i] === 1) {
				dfs(computers[i], i);
			}
		}
	}
	for (var i = 0; i < n; i++) {
		if (visited[i] === 0) {
			answer++;
			dfs(computers[i], i);
		}
	}
	return answer;
}

console.log(
	solution(3, [
		[1, 1, 0],
		[1, 1, 0],
		[0, 0, 1],
	])
);
console.log(
	solution(3, [
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
	])
);
console.log(
	solution(3, [
		[1, 1, 0],
		[1, 1, 1],
		[0, 1, 1],
	])
);
