function solution(word) {
	var answer = 1;
	let arr = ["A", "E", "I", "O", "U"];
	let str = "";

	while (1) {
		if (str.length < 5) str += "A";
		else {
			let lastIdx = str.length - 1;
			{
				if (str[lastIdx] === "U") {
					str = str.split("");
					while (lastIdx >= 0 && str[lastIdx] === "U") {
						str[lastIdx] = "";
						lastIdx--;
					}
					const findIdx = arr.indexOf(str[lastIdx]);
					str[lastIdx] = arr[findIdx + 1];
					str = str.join("");
					console.log(str);
				} else {
					const findIdx = arr.indexOf(str[lastIdx]);
					console.log(arr[findIdx + 1]);
					str = str.substring(0, lastIdx) + arr[findIdx + 1];
					console.log(str);
				}
			}
		}
		if (str === word) return answer;
		answer++;
	}
	return answer;
}

console.log(solution("EIO"));
