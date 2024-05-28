function solution(clothes) {
	var answer = 1;
	let closet = {};
	for (let [_, type] of clothes) {
		if (!closet[type]) closet[type] = 1;
		closet[type]++;
	}
	closet = Object.values(closet);
	for (let cnt of closet) answer *= cnt;

	return answer - 1;
}