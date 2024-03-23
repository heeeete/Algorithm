function solution(record) {
	var answer = [];
	const info = new Map();
	record = record.map((e) => e.split(" "));
	for (let [status, id, nick] of record) {
		if (status === "Enter") info.set(id, nick);
		else if (status === "Change") info.set(id, nick);
	}
    // console.log(record)
	for (let [status, id, nick] of record) {
		if (status === "Enter") answer.push(`${info.get(id)}님이 들어왔습니다.`);
		else if (status === "Leave") answer.push(`${info.get(id)}님이 나갔습니다.`);
	}
	return answer;
}
