function solution(s) {
	let answer = 0;
	let len = s.length;
	if (s.length === 1) return 0;

	for (let i = 1; i <= len; i++) {
		let arr = [];
		for (let j = i; len; len--) {
			let temp = s[(j - 1) % s.length];
			if (temp === "]") {
				if (arr.length === 0 || arr[arr.length - 1] !== "[") break;
				else arr.pop();
			} else if (temp === ")") {
				if (arr.length === 0 || arr[arr.length - 1] !== "(") break;
				else arr.pop();
			} else if (temp === "}") {
				if (arr.length === 0 || arr[arr.length - 1] !== "{") break;
				else arr.pop();
			} else arr.push(temp);
			j++;
		}
		if (!len && !arr.length) answer++;
		len = s.length;
	}
	return answer;
}
console.log(solution(")"));
console.log(solution("[](){}"));
console.log(solution("}]()[{"));
