function solution(priorities, location) {
	var answer = 0;
	let arr = Array.from(Array(priorities.length).fill(0));
	let search = priorities[location];

	for (let i = 0; i < arr.length; i++) {
		arr[i] = i;
	}

	while (priorities.length) {
		let proccess = priorities.shift();
		let idx = arr.shift();
		let priority = Math.max(...priorities);
		console.log(proccess, idx, priority, priorities.length);
		if (proccess < priority) {
			priorities.push(proccess);
			arr.push(idx);
		} else {
			if (idx === location) {
				return answer + 1;
			}
			answer++;
		}
	}
	return answer;
}