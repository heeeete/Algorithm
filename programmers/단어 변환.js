function solution(begin, target, words) {
	var answer = [];
	var visited = Array.from({ length: words.length }, () => 0);

	function dfs(str, cnt) {
		if (str === target) {
			return answer.push(cnt);
		}

		for (let i = 0; i < words.length; i++) {
			let diff = 0;
			if (visited[i] === 0) {
				for (let j = 0; j < str.length; j++) {
					if (str[j] !== words[i][j]) diff++;
				}
				if (diff === 1) {
					visited[i] = 1;
					dfs(words[i], cnt + 1);
					visited[i] = 0;
				}
			}
		}
	}

	dfs(begin, 0);
	if (answer.length) return Math.min(...answer);
	return 0;
}
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
