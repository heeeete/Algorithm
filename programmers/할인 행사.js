function solution(want, number, discount) {
	var answer = 0;
	let obj = {};
	for (let i = 0; i < want.length; i++) {
		obj[want[i]] = number[i];
	}

	for (let i = 0; i <= discount.length - 10; i++) {
		let copy = { ...obj };
		for (let j = i; j < i + 10; j++) {
			if (copy[discount[j]]) copy[discount[j]]--;
			if (copy[discount[j]] === 0) delete copy[discount[j]];
		}
		if (Object.keys(copy).length === 0) answer++;
	}

	return answer;
}

console.log(
	solution(
		["banana", "apple", "rice", "pork", "pot"],
		[3, 2, 2, 2, 1],
		[
			"chicken",
			"apple",
			"apple",
			"banana",
			"rice",
			"apple",
			"pork",
			"banana",
			"pork",
			"rice",
			"pot",
			"banana",
			"apple",
			"banana",
		]
	)
);
