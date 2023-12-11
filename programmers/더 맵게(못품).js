function solution(scoville, K) {
	var answer = 0;
	let prev = Infinity;
	let flag = 0;
	scoville.sort((a, b) => b - a);

	while (scoville.length) {
		let f = scoville.pop();
		let s = scoville.pop();
		if (f >= K) return answer;
		if (s >= prev) {
			scoville.push(s);
			if (prev > f) prev = f + prev * 2;
			else prev = prev + f * 2;
		} else prev = f + s * 2;
		if (prev >= K) flag = 1;
		answer++;
	}
	if (flag) return answer;
	else return -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
console.log(solution([10, 9, 8, 7, 6, 4, 2, 1], 7));
console.log(solution([3, 4], 7));
console.log(solution([5, 4, 3, 2, 1], 2));
console.log(solution([5, 4, 3, 2, 1], 0));
console.log(solution([5, 4, 3, 2, 1], 1));
console.log(solution([5, 4, 3, 2, 1], 2));
