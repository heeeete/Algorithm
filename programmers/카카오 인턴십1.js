function solution(friends, gifts) {
	var answer = Array.from({ length: friends.length }, () => 0);
	var arr = Array.from({ length: friends.length }, () => Array(2).fill(0));
	var list = Array.from({ length: friends.length }, () => Array(2).fill(""));
	gifts = gifts.map((e) => e.split(" "));
	for (var i = 0; i < gifts.length; i++) {
		const give = gifts[i][0];
		const take = gifts[i][1];
		const giveIdx = friends.indexOf(give);
		const takeIdx = friends.indexOf(take);
		arr[giveIdx][0]++;
		list[giveIdx][0] += take + " ";
		arr[takeIdx][1]++;
		list[takeIdx][1] += give + " ";
	}
	console.log(arr);
	console.log("선물지수");
	list = list.map((e) => e.map((e) => e.split(" ")));
	for (var i = 0; i < list.length; i++) {
		var giveArr = Array.from({ length: friends.length }, () => 0);
		var takeArr = Array.from({ length: friends.length }, () => 0);
		for (var k = 0; k < list[i][0].length; k++) {
			idx = friends.indexOf(list[i][0][k]);
			if (idx !== -1) giveArr[idx]++;
		}
		for (var k = 0; k < list[i][1].length; k++) {
			idx = friends.indexOf(list[i][1][k]);
			if (idx !== -1) takeArr[idx]++;
		}
		for (var k = 0; k < friends.length; k++) {
			if (k !== i && giveArr[k] > takeArr[k]) {
				console.log(i, k, "그냥 커서 받음");
				answer[i]++;
			} else if (k !== i && giveArr[k] === takeArr[k]) {
				console.log(i, k, "선물 지수 비교");
				const a = arr[i][0] - arr[i][1];
				const b = arr[k][0] - arr[k][1];
				console.log(a, b);
				if (a > b) answer[i]++;
			}
		}
		console.log(giveArr);
		console.log(takeArr);
	}

	return Math.max(...answer);
}

console.log(solution());
