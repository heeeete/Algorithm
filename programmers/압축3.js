function solution(msg) {
	let map = new Map();
	let arr = [];
	let i = 0;
	let j = 0;
	for (i; i < 26; i++) {
		map.set(String.fromCharCode("A".charCodeAt([0]) + i), i + 1);
	}

	for (let k = 0; k < msg.length; k++) {
		let str = "";
		let cnt = 0;
		for (j = k; j < msg.length; j++) {
			cnt++;
			str = str + msg[j];
			if (!map.has(str)) {
				map.set(str, ++i);
				break;
			}
		}
		if (j === msg.length) {
			arr.push(map.get(str));
			break;
		} else if (cnt >= 2) {
			k += cnt - 2;
			str = str.substring(0, str.length - 1);
		}
		arr.push(map.get(str));
	}
	return arr;
}
