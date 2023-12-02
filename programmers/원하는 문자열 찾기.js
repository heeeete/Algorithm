function solution(myString, pat) {
	myString = myString.toLowerCase();
	pat = pat.toLowerCase();
	const regexp = new RegExp(pat);
	return regexp.test(myString) ? 1 : 0;
}

console.log(solution("AbCdEfG", "aBc"));
