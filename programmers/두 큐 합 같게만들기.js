function solution(queue1, queue2) {
	let sum1 = queue1.reduce((curr, next) => (curr += next));
	let sum2 = queue2.reduce((curr, next) => (curr += next));
	let half = (sum1 + sum2) / 2;
	let idx1 = 0;
	let idx2 = queue2.length;
	let q = [...queue1, ...queue2];
	for (let i = 0; i < queue1.length * 2; i++) {
		if (sum1 === half) return i;
		else if (sum1 > half) sum1 -= q[idx1++ % q.length];
		else if (sum1 < half) sum1 += q[idx2++ % q.length];
	}
	return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(
	solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
);

// 1 5 3 7 2
// 8 6 5 7 1

// 1 2 1 2 1 10
