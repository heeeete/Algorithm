function solution(weights) {
	let answer = 0;
	let ratios = [1, 3 / 2, 2, 4 / 3];
	let collect = {};

	weights.sort((a, b) => b - a);
	for (let w of weights) {
		let cal;
		for (let ratio of ratios) {
			cal = w * ratio;
			if (collect[cal]) answer += collect[cal];
		}
		if (collect[w]) collect[w]++;
		else collect[w] = 1;
	}
	return answer;
}

console.log(solution([100, 180, 360, 100, 270]));
