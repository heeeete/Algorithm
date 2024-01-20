function solution(elements) {
	let answer = new Set();

	for (let i = 1; i <= elements.length; i++) {
		for (let j = 0; j < elements.length; j++) {
			let sum = 0;
			for (let k = 0; k < i; k++) {
				sum += elements[(j + k) % elements.length];
			}
			answer.add(sum);
		}
	}
	return answer.size;
}

console.log(solution([7, 9, 1, 1, 4]));
// [7, 9][(7, 1)][(7, 1)][(7, 4)][(9, 1)][(9, 1)][(9, 4)][(1, 9)][(1, 1)][(1, 4)][
// 	(1, 9)
// ][(1, 1)][(1, 4)][(4, 9)][(4, 1)][(4, 1)];
