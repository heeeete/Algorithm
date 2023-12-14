function solution(number, k) {
	var answer = -1;
	let cnt = 0;
	let stack = [];
	number = number.split("");
	number.reverse();

	while (cnt !== k) {
		stack.push(number.pop());
		if (stack[stack.length - 1] < number[number.length - 1]) {
			while (stack[stack.length - 1] < number[number.length - 1]) {
				stack.pop();
				cnt++;
				if (cnt === k) {
					number.reverse();
					return stack.join("") + number.join("");
				}
			}
		}
		if (number.length === 0) {
			while (cnt !== k) {
				stack.pop();
				cnt++;
			}
			return stack.join("");
		}
	}
	console.log(stack);
}

console.log(solution("1924", 2));
console.log(solution("321789", 2));
console.log(solution("21", 1));
console.log(solution("54231", 2));
