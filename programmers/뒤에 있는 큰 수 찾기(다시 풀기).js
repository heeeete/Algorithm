function solution(numbers) {
	let answer = Array.from({ length: numbers.length }, () => -1);
	let stack = [];

	for (let i = numbers.length - 1; i >= 0; i--) {
		while (stack.length !== 0 && numbers[i] >= stack.at(-1)) stack.pop();
		if (stack.length !== 0) answer[i] = stack.at(-1);
		stack.push(numbers[i]);
	}
	return answer;
}

console.log(solution([2, 3, 3, 5]));

// 109253

// 5 2
