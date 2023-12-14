function solution(k, dungeons) {
	var answer = [];
	let visited = Array.from({ length: dungeons.length }, () => 0);
	let visitedCnt = 0;

	function dfs(K, cnt) {
		if (visitedCnt === dungeons.length) return answer.push(cnt);

		for (let i = 0; i < dungeons.length; i++) {
			if (visited[i] === 0) {
				visited[i] = 1;
				visitedCnt++;
				if (dungeons[i][0] <= K) dfs(K - dungeons[i][1], cnt + 1);
				else dfs(K, cnt);
				visited[i] = 0;
				visitedCnt--;
			}
		}
	}

	dfs(k, 0);
	return Math.max(...answer);
}

console.log(
	solution(80, [
		[80, 20],
		[50, 40],
		[30, 10],
	])
);
