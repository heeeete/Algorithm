function solution(n) {
	let cnt = 0;
	while (n !== 0) {
		if (n % 2 === 0) n = n / 2;
		else {
			cnt++;
			n--;
		}
	}
	return cnt;
}
