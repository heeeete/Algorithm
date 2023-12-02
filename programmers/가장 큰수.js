function solution(numbers) {
	numbers = numbers.map((e) => e.toString());
	numbers.sort((a, b) => {
		const ab = a + b;
		const ba = b + a;
		return ba - ab;
	});

	return numbers.join("");
}

// console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([3, 30, 34, 5, 9]));
