function solution(numbers) {
	numbers.sort((a, b) => {
		const A = a.toString();
		const B = b.toString();

		if (A + B > B + A) return -1;
		if (A + B < B + A) return 1;
		return 0;
	});
	let answer = BigInt(numbers.join(""));
	return answer.toString();
}

console.log(solution([6, 10, 2]));
console.log(solution([0, 0, 0]));
console.log(solution([3, 30, 34, 5, 9]));
