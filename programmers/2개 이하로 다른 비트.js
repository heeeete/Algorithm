function check(bit, bit2) {
	let cnt = 0;
	let len = bit.length,
		len2 = bit2.length;

	if (len !== len2) {
		let diff = len > len2 ? len - len2 : len2 - len;

		if (len < len2) {
			let temp = 0;
			for (let i = 0; i < len2 - len; i++) {
				if (bit2[i] === 1) temp++;
				if (temp > 2) return false;
			}
			for (let i = 0; i < diff; i++) {
				bit = "0" + bit;
				if (bit[0] !== bit2[bit2.length - bit.length]) cnt++;
				if (cnt > 2) return false;
			}
		} else {
			let temp = 0;
			for (let i = 0; i < len - len2; i++) {
				if (bit[i] === 1) temp++;
				if (temp > 2) return false;
			}
			for (let i = 0; i < diff; i++) {
				bit2 = "0" + bit2;
				if (bit2[0] !== bit[bit.length - bit2.length]) cnt++;
				if (cnt > 2) return false;
			}
		}
	}

	for (let i = 0; i < len; i++) {
		if (bit[bit.length - 1 - i] !== bit2[bit2.length - 1 - i]) cnt++;
		if (cnt > 2) return false;
	}

	return true;
}

function solution(numbers) {
	var answer = [];
	for (let i = 0; i < numbers.length; i++) {
		let bit = numbers[i].toString(2);
		let j = numbers[i] + 1;
		while (!check(bit, j.toString(2))) j++;
		answer.push(j);
	}

	return answer;
}

console.log(solution([2, 7]));
1000001;
0101;
