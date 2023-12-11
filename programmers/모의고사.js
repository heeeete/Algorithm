function solution(answers) {
	var arr = Array.from({ length: 3 }, () => 0);
	let per1 = [1, 2, 3, 4, 5];
	let per2 = [2, 1, 2, 3, 2, 4, 2, 5];
	let per3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	for (let i = 0; i < answers.length; i++) {
		if (answers[i] === per1[i % 5]) arr[0]++;
		if (answers[i] === per2[i % 8]) arr[1]++;
		if (answers[i] === per3[i % 10]) arr[2]++;
	}

	var answer = [];
	let maxCnt = Math.max(...arr);
	if (arr[0] === maxCnt) answer.push(1);
	if (arr[1] === maxCnt) answer.push(2);
	if (arr[2] === maxCnt) answer.push(3);

	return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
