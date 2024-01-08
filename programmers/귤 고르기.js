function solution(k, tangerine) {
	var answer = 0;
	let arr = [];
	for (let i = 0; i < tangerine.length; i++) {
		if (!arr[tangerine[i] - 1]) arr[tangerine[i] - 1] = 1;
		else arr[tangerine[i] - 1]++;
	}
	arr.sort((a, b) => b - a);
	let cnt = 0;
	for (let n of arr) {
		answer++;
		cnt += n;
		if (cnt >= k) break;
	}
	return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
