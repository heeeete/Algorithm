function solution(progresses, speeds) {
	var answer = [];

	for (let i = 0; i < progresses.length; i++) {
		let n = progresses[i];
		let day = 0;
		while (n < 100) {
			n += speeds[i];
			day++;
		}
		progresses[i] = day;
	}

	console.log(progresses);

	for (let i = 0; i < progresses.length; i++) {
		if (progresses[i] !== -1) {
			const cur = progresses[i];
			let cnt = 1;
			progresses[i] = -1;
			for (let j = i + 1; j < progresses.length; j++) {
				console.log(cur, progresses[j]);
				if (cur >= progresses[j]) {
					progresses[j] = -1;
					cnt++;
				} else break;
			}
			answer.push(cnt);
		}
	}
	return answer;
}