function solution(n) {
	const a = n.toString(2);
	const cnt = a.match(/1/g).length;

	let i = n + 1;

	for (; ; i++) {
		const temp = i.toString(2);
		if (temp.match(/1/g).length === cnt) break;
	}

	return i;
}