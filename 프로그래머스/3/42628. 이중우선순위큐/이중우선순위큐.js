function solution(operations) {
	const answer = [];
	operations = operations.map((e) => e.split(" "));
	for (let [opt, value] of operations) {
		if (opt === "I") answer.push(Number(value));
		else if (answer.length >= 1 && value === "1") {
			const target = answer.indexOf(Math.max(...answer));
			answer.splice(target, 1);
		} else if (answer.length >= 1 && value === "-1") {
			const target = answer.indexOf(Math.min(...answer));
			answer.splice(target, 1);
		}
	}

	if (answer.length <= 1) return [0, 0];
	else return [Math.max(...answer), Math.min(...answer)];
}