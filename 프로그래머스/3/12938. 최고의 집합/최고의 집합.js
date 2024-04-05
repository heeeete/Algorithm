function solution(n, s) {
	var answer = [];
	if (n > s) return [-1];
	let i = ~~(s / n);
	s = s % n;

	for (let j = 0; j < n; j++) {
		answer.push(s > 0 ? i + 1 : i);
		s--;
	}

	answer.sort();

	return answer;
}