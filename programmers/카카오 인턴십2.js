function solution(dice) {
	var answer = [];
	var visited = Array.from({ length: dice.length }, () => 0);

	function sum(arr) {}

	function dfs(arr) {
		if (arr.length === dice.length / 2) {
			for (var i = 0; i < dice.length; i++) {}
		}
		for (var i = 0; i < dice.length; i++) {
			if (visited[i] === 0) {
				visited[i] = 1;
				dfs([...arr, i]);
				visited[i] = 0;
			}
		}
	}

	dfs([]);

	return answer;
}

solution([
	[1, 1, 2, 2, 3, 3],
	[1, 2, 3, 4, 5, 6],
	[1, 1, 3, 3, 5, 5],
	[3, 3, 3, 3, 4, 4],
]);
