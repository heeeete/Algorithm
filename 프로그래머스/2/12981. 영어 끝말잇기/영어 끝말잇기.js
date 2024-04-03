function solution(n, words) {
	const obj = {};

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (i !== 0) {
			const prevWord = words[i - 1];
			if (word[0] !== prevWord[prevWord.length - 1]) {
				return [(i + 1) % n === 0 ? n : (i + 1) % n, ~~(i / n) + 1];
			}
		}
		if (!obj[word]) obj[word] = true;
		else {
			return [(i + 1) % n === 0 ? n : (i + 1) % n, ~~(i / n) + 1];
		}
	}

	return [0, 0];
}