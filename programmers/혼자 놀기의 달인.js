function check(arrs, arr) {
	for (let i = 0; i < arrs.length; i++) {
		let flag = 0;
		if (arrs[i].length === arr.length)
			for (let j = 0; j < arr.length; j++) {
				if (arrs[i][j] !== arr[j]) {
					flag = 1;
					break;
				}
			}
		else flag = 1;
		if (!flag) return false;
	}
	return true;
}

function solution(cards) {
	var answer = [];
	let cnts = [];
	let visited = Array.from({ length: 101 }, () => 0);

	function dfs(idx, cnt, arr) {
		if (visited[idx] === 0) {
			visited[idx] = 1;
			dfs(cards[idx] - 1, cnt + 1, [...arr, cards[idx]]);
			visited[idx] = 0;
		} else {
			arr.sort((a, b) => a - b);
			if (answer.length === 0) {
				cnts.push(cnt);
				return answer.push(arr);
			} else if (check(answer, arr)) {
				{
					cnts.push(cnt);
					return answer.push(arr);
				}
			}
		}
	}

	for (let i = 0; i < cards.length; i++) {
		visited[i] = 1;
		dfs(cards[i] - 1, 1, [cards[i]]);
		visited[i] = 0;
	}

	cnts.sort((a, b) => a - b);

	return cnts.pop() * cnts.pop();
}

console.log(solution([2, 1]));

// 6 5 2
// 8 4 7 1
// 7 1 8 4
// 2 6 5

// 3

// 1 2 3 4
// 2 3 4 5
// 1 2 3

// 1 2 3
