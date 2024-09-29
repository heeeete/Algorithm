function solution(sequence, k) {
	let [l, r] = [0, 0];
	let sum = sequence[0];
	let answer = [];

	while (r < sequence.length) {
		if (sum < k) sum += sequence[++r];
		else if (sum > k) sum -= sequence[l++];
		else {
			if (!answer.length || answer[1] - answer[0] > r - l) answer = [l, r];
			sum += sequence[++r];
			sum -= sequence[l++];
		}
	}
	return answer;
}
