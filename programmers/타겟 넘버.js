function solution(numbers, target) {
	var answer = 0;

	function dfs(sum, idx) {
		if (idx === numbers.length && sum === target) return answer++;
		else if (idx === numbers.length) return;
		dfs(sum + numbers[idx], idx + 1);
		dfs(sum - numbers[idx], idx + 1);
	}
	dfs(0, 0);
	return answer;
}

solution([4, 1, 2, 1], 4);
