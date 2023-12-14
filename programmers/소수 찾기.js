function solution(numbers) {
	var answer = 0;
	var arr = numbers.split("");
	var decimals = new Map();
	var visited = Array.from({ length: arr.length }, () => 0);

	function dfs(num) {
		if (+num > 1 && !decimals.has(+num)) {
			let isDecimal = 1;
			for (let i = 2; i < Math.sqrt(+num); i++) {
				if (+num % i === 0) {
					isDecimal = 0;
					break;
				}
			}
			if (isDecimal) {
				decimals.set(+num, 0);
				answer++;
			}
		}

		for (let i = 0; i < arr.length; i++) {
			if (visited[i] === 0) {
				visited[i] = 1;
				dfs(num + arr[i]);
				visited[i] = 0;
			}
		}
	}

	dfs("");
	return answer;
}

console.log(solution("17"));
console.log(solution("011"));
console.log(solution("2"));
console.log(solution("11"));
console.log(solution("121"));
