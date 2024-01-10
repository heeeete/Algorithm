function solution(topping) {
	let answer = 0;
	let arr = new Map();
	for (let key of topping) {
		if (!arr.has(key)) arr.set(key, 1);
		else {
			arr.set(key, arr.get(key) + 1);
		}
	}

	let a = new Map();

	for (let key of topping) {
		if (!a.has(key)) a.set(key, 1);
		else a.set(key, a.get(key) + 1);
		arr.set(key, arr.get(key) - 1);
		if (arr.get(key) === 0) arr.delete(key);
		if (arr.size === a.size) answer++;
	}
	return answer;
}

// console.log(solution([1, 2, 3, 1, 4]));
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
