function solution(plans) {
	var answer = [];
	let stack = [];

	plans = plans.map((v) =>
		v.map((v, idx) =>
			idx === 1 ? v.split(":").map((v) => Number(v)) : idx === 2 ? Number(v) : v
		)
	);
	plans.sort((a, b) => a[1][1] - b[1][1]);
	plans.sort((a, b) => a[1][0] - b[1][0]);
	for (let i = 0; i < plans.length - 1; i++) {
		const currTime = plans[i][1][0] * 60 + plans[i][1][1];
		const nextTime = plans[i + 1][1][0] * 60 + plans[i + 1][1][1];
		if (currTime + plans[i][2] > nextTime) {
			plans[i][2] -= nextTime - currTime;
			stack.push(plans[i]);
		} else if (currTime + plans[i][2] < nextTime) {
			answer.push(plans[i][0]);
			let spareTime = nextTime - (currTime + plans[i][2]);
			while (spareTime) {
				const sub = stack.pop();
				if (sub !== undefined) {
					if (sub[2] - spareTime <= 0) {
						spareTime -= sub[2];
						answer.push(sub[0]);
					} else {
						sub[2] -= spareTime;
						stack.push(sub);
						break;
					}
				} else break;
			}
		} else {
			answer.push(plans[i][0]);
		}
	}
	answer.push(plans[plans.length - 1][0]);
	while (stack.length && 1) {
		const subject = stack.pop();
		console.log(subject);
		if (subject !== undefined) answer.push(subject[0]);
		else break;
	}
	return answer;
}
