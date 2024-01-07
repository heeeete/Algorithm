function solution(x, y, n) {
	var answer = 0;
	var queue = [x];
	let visited = Array.from({ length: 1000001 }, () => -1);

	if (x === y) return 0;

	while (queue.length) {
		let newDeque = [];
		for (let num of queue) {
			for (let number of [num + n, num * 2, num * 3]) {
				if (visited[number] === -1) {
					visited[number] = 0;
					if (number === y) return answer + 1;
					if (number < y) newDeque.push(number);
				}
			}
		}
		queue = newDeque;
		answer++;
	}
	return -1;
}

console.log(solution(10, 40, 30));
console.log(solution(10, 40, 5));
console.log(solution(2, 5, 4));
console.log(solution(8, 144, 32));
