function solution(info, query) {
	var answer = [];
	let people = [];
	for (let i of info) {
		i = i.split(" ");
		const lan = i[0];
		const job = i[1];
		const level = i[2];
		const food = i[3];

		if (!people[lan]) {
			people[lan] = [];
		}
		if (!people[lan][job]) people[lan][job] = [];
		if (!people[lan][job][level]) people[lan][job][level] = [];
		if (!people[lan][job][level][food]) people[lan][job][level][food] = [];

		people[lan][job][level][food].push(parseInt(i[4]));
	}

	for (let q of query) {
		q = q.split(" and ");
		q[3] = q[3].split(" ");
		[q[3], q[4]] = q[3];
		q[4] = parseInt(q[4]);
		let arr = people;
		let arr2 = [];
		for (let opt of q) {
			if (opt === "-") {
				arr = arr[0];
				if (arr[1]) arr2 = arr[1];
			} else {
				arr = arr[opt];
			}
		}
		console.log("NEXT");
	}

	return answer;
}

console.log(
	solution(
		[
			"java backend junior pizza 150",
			"python frontend senior chicken 210",
			"python frontend senior chicken 150",
			"cpp backend senior pizza 260",
			"java backend junior chicken 80",
			"python backend senior chicken 50",
		],
		[
			"java and backend and junior and pizza 100",
			"python and frontend and senior and chicken 200",
			"cpp and - and senior and pizza 250",
			"- and backend and senior and - 150",
			"- and - and - and chicken 100",
			"- and - and - and - 150",
		]
	)
);
