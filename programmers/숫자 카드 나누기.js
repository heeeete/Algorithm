function solution(arrayA, arrayB) {
	let answer = [];
	arrayA = [...new Set(arrayA)];
	arrayB = [...new Set(arrayB)];
	arrayA.sort((a, b) => a - b);
	arrayB.sort((a, b) => a - b);

	let range =
		arrayA[arrayA.length - 1] > arrayB[arrayB.length - 1]
			? arrayA[arrayA.length - 1]
			: arrayB[arrayB.length - 1];

	for (let i = 1; i <= range; i++) {
		let flag = 1;
		for (let n of arrayA) {
			if (n % i !== 0) {
				flag = 0;
				break;
			}
		}
		if (flag) {
			for (let n of arrayB) {
				if (n % i === 0) {
					flag = 0;
					break;
				}
			}
		}
		if (flag) {
			answer.push(i);
			continue;
		}
		flag = 1;
		for (let n of arrayB) {
			if (n % i !== 0) {
				flag = 0;
				break;
			}
		}
		if (flag) {
			for (let n of arrayA) {
				if (n % i === 0) {
					flag = 0;
					break;
				}
			}
		}
		if (flag) answer.push(i);
	}

	return answer.length ? Math.max(...answer) : 0;
}
console.log(solution([10, 17], [5, 20]));
console.log(solution([10, 20], [5, 17]));
