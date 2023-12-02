function solution(expression) {
	var signs = ["-", "+", "*"];
	var visited = [0, 0, 0];
	var max = -1;
	expression = expression.split(/([-+*])/);

	function dfs(arr, sign) {
		if (sign !== -1) {
			var idx = -1;
			while ((idx = arr.indexOf(sign)) !== -1) {
				var sum = eval(arr[idx - 1] + arr[idx] + arr[idx + 1]);
				arr.splice(idx - 1, 3, sum.toString());
			}
			if (arr.length === 1) return Math.abs(Number(arr[0]));
		}

		for (let i = 0; i < 3; i++) {
			if (visited[i] !== 1) {
				visited[i] = 1;
				var tempMax = dfs([...arr], signs[i]);
				if (max < tempMax) max = tempMax;
				visited[i] = 0;
			}
		}
	}
	dfs(expression, -1);
	return max;
}

console.log(solution("50*6-3*2"));
