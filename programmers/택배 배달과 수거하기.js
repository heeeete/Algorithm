function solution(cap, n, deliveries, pickups) {
	var answer = 0;
	var overDeliveries = 0;
	var overPickups = 0;

	for (let i = n - 1; i >= 0; i--) {
		var cnt = 0;
		deliveries[i] += overDeliveries;
		pickups[i] += overPickups;

		while (deliveries[i] > 0 || pickups[i] > 0) {
			deliveries[i] -= cap;
			pickups[i] -= cap;
			cnt++;
		}

		overDeliveries = deliveries[i];
		overPickups = pickups[i];

		answer += (i + 1) * 2 * cnt;
	}

	return answer;
}
console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [1, 2, 0, 1, 0, 2, 0]));
console.log(solution(1, 5, [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]));
console.log(solution(2, 2, [0, 0], [0, 4]));
console.log(solution(3, 2, [2, 4], [4, 2]));
console.log(solution(2, 6, [0, 2, 0, 0, 2, 0], [0, 0, 0, 0, 0, 1]));
console.log(solution(3, 4, [0, 0, 0, 7], [0, 0, 0, 5]));
console.log(solution(2, 6, [1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1]));
