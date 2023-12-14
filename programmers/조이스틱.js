function solution(name) {
	var answer = [];
	var cnts = [];

	for (let i = 0; i < name.length; i++) {
		if (name[i].charCodeAt() <= "N".charCodeAt())
			cnts.push(name[i].charCodeAt() - 65);
		else cnts.push(90 - name[i].charCodeAt() + 1);
	}

	function dfs(cntArr, cnt, idx) {
		cnt += cntArr[idx];
		cntArr[idx] = 0;

		if (cntArr.reduce((c, r) => c + r) === 0) return answer.push(cnt);

		let right = idx;
		let left = idx;
		let rCnt = 0;
		let lCnt = 0;
		while (cntArr[right] === 0) {
			right = (right + 1) % name.length;
			rCnt++;
		}
		while (cntArr[left] === 0) {
			left = left - 1 < 0 ? name.length - 1 : left - 1;
			lCnt++;
		}
		dfs([...cntArr], cnt + rCnt, right);
		dfs([...cntArr], cnt + lCnt, left);
	}

	dfs(cnts, 0, 0);

	return Math.min(...answer);
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));
console.log(solution("JAAAABAAN"));
console.log(solution("AAAAA"));
console.log(solution("M"));
console.log(solution("N"));
console.log(solution("O"));
console.log(solution("BBB"));
console.log(
	solution(
		"AAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA"
	)
);
console.log(solution("ABABAAAAABA"));
