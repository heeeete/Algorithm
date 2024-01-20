function solution(n, left, right) {
	var answer = [];
	let flag = 0;

	for (let i = 1; i <= n; i++) {
		let cnt = i;
		for (let j = 1; j <= n; j++) {
			flag++;
			if (cnt) {
				cnt--;
				if (flag > left) {
					answer.push(i);
				}
			} else if (flag > left) answer.push(j);
			if (flag > right) break;
		}
		if (flag > right) break;
	}

	return answer;
}

console.log(solution(4, 7, 14));
