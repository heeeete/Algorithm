function solution(n) {
	const cnt = n.toString(2).match(/1/g).length;
	for (i = n + 1; ; i++) {
		if (i.toString(2).match(/1/g).length === cnt) return i;
	}
}