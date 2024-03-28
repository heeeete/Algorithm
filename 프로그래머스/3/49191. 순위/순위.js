function solution(n, results) {
	var answer = 0;
	const winners = Array.from(Array(n + 1), () => []);
	const losers = Array.from(Array(n + 1), () => []);
	const ranking = Array.from(Array(n + 1), () => 0);

	for (let [win, lose] of results) {
		winners[win].push(lose);
		losers[lose].push(win);
	}

	// console.log(winners);
	// console.log(losers);

	for (let i = 1; i < n + 1; i++) {
		const winNodes = winners[i];
		const loseNodes = losers[i];
		const winVisited = Array.from(Array(n + 1), () => 0);
		const loseVisited = Array.from(Array(n + 1), () => 0);
		winVisited[i] = 1;
		loseVisited[i] = 1;
		let prevLen = 0;
		// console.log("-------------win");
		while (1) {
			let len = winNodes.length;
			for (let i = prevLen; i < len; i++) {
				const idx = winNodes[i];
				if (winVisited[idx] === 0) {
					winVisited[idx] = 1;
					for (let j = 0; j < winners[idx].length; j++)
						if (
							winVisited[winners[idx][j]] === 0 &&
							winNodes.indexOf(winners[idx][j]) === -1
						)
							winNodes.push(winners[idx][j]);
				}
			}
			if (prevLen === len) break;
			prevLen = len;
		}
		prevLen = 0;
		// console.log(winNodes);
		// console.log("-------------LOSE");
		while (1) {
			let len = loseNodes.length;
			for (let i = prevLen; i < len; i++) {
				const idx = loseNodes[i];
				if (loseVisited[idx] === 0) {
					loseVisited[idx] = 1;
					for (let j = 0; j < losers[idx].length; j++)
						if (
							loseVisited[losers[idx][j]] === 0 &&
							loseNodes.indexOf(losers[idx][j]) === -1
						)
							loseNodes.push(losers[idx][j]);
				}
			}
			if (prevLen === len) break;
			prevLen = len;
		}
		// console.log("WIN = ", winNodes);
		// console.log("LOSE = ", loseNodes);
		// console.log(winVisited);
		// console.log(loseVisited);
		let flag = 1;
		for (let i = 1; i < winVisited.length; i++) {
			if (!winVisited[i] && !loseVisited[i]) {
				flag = 0;
				break;
			}
		}
		if (flag) {
			answer++;
		}
	}

	return answer;
}