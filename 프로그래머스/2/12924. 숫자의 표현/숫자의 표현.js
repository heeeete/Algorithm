function solution(n) {
	let answer = 1;
	function dfs(num, idx) {
		if (num === n) return answer++;
		else if (num < n) dfs(num + idx, idx + 1);
	}

	for (let i = 1; i < Math.round(n / 2); i++) dfs(i, i + 1);
	return answer;
}