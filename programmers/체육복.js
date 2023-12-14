function solution(n, lost, reserve) {
	var answer = 0;

	lost.sort((a, b) => b - a);
	reserve.sort((a, b) => b - a);

	for (let i = 0; i < lost.length; i++) {
		for (let j = 0; j < reserve.length; j++) {
			if (lost[i] === reserve[j]) {
				lost[i] = -1;
				reserve[j] = -1;
				break;
			}
		}
	}

	for (let i = lost.length - 1; i >= 0; i--) {
		const N = lost[i];
		for (let j = reserve.length - 1; j >= 0; j--) {
			if (
				(reserve[j] !== -1 && N - 1 === reserve[j]) ||
				N + 1 === reserve[j] ||
				N === reserve[j]
			) {
				reserve[j] = -1;
				lost[i] = -1;
				break;
			}
		}
	}

	for (let n of lost) {
		if (n !== -1) answer++;
	}

	return n - answer;
}

console.log(solution(5, [1, 2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(5, [4, 5], [3, 4]));
