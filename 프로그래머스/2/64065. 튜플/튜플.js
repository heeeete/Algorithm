function solution(s) {
	var answer = [];
	const arr = [];
	const map = new Map();

	for (let i = 0; i < s.length; i++) {
		if (i === 0 || i === s.length - 1) continue;
		else {
			if (s[i] === "{") {
				i++;
				const tempArr = [];
				let num = "";
				while (s[i] !== "}") {
					if (s[i] === ",") {
						tempArr.push(Number(num));
						num = "";
					} else num += s[i];
					i++;
				}
				tempArr.push(Number(num));
				arr.push(tempArr);
			}
		}
	}

	arr.sort((a, b) => {
		return a.length - b.length;
	});
	for (let a of arr) {
		for (let i = 0; i < a.length; i++) {
			if (!map.has(a[i])) {
				answer.push(a[i]);
				map.set(a[i], 0);
			}
		}
	}
	return answer;
}