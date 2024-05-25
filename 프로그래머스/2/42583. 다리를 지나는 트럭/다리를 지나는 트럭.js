function solution(bridge_length, weight, truck_weights) {
	let answer = 0;
	let currWeight = 0;
	let currLength = 0;
	let bridge = [];
	truck_weights = truck_weights.reverse();

	while (truck_weights.length || bridge.length) {
		if (bridge.length && answer - bridge[0][1] === bridge_length) {
			const truck = bridge.shift();
			currLength--;
			currWeight -= truck[0];
		}
		if (
			bridge.length < bridge_length &&
			currWeight + truck_weights[truck_weights.length - 1] <= weight
		) {
			bridge.push([truck_weights.pop(), answer]);
			currWeight += bridge[bridge.length - 1][0];
			currLength++;
		}
		answer++;
	}

	return answer;
}