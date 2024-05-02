function solution(relation) {
	var answer = 0;

	function search(arr) {
		let flag = 1;
		for (let j = 0; j < relation.length - 1; j++) {
			for (let k = j + 1; k < relation.length; k++) {
				for (let i = 0; i < arr.length; i++) {
					if (relation[j][arr[i]] !== relation[k][arr[i]]) {
						flag = 1;
						break;
					} else flag = 0;
				}
				if (!flag) return 0;
			}
		}
		return 1;
	}
	const test = [];

	function dfs(arr, idx, cnt) {
		if (arr.length === cnt) {
			if (search(arr)) test.push(arr);
		}
		for (let i = idx; i < relation[0].length; i++) {
			dfs([...arr, i], i + 1, cnt);
		}
	}

	for (let i = 1; i <= relation[0].length; i++) {
		dfs([], 0, i);
	}

	// console.log(test);
	const map = new Map();

	function checkDFS(target, arr, idx) {
		if (arr.length && arr.length !== target.length) {
			let temp = "";
			for (let i = 0; i < target.length; i++) {
				if (arr.indexOf(i) === -1) temp += target[i];
			}
			// console.log("TEMP = ", temp, arr);
			if (!map.has(temp)) {
			} else return false;
		}
		for (let i = idx; i < target.length; i++) {
			let flag = checkDFS(target, [...arr, i], i + 1);
			// console.log(flag);
			if (!flag) return false;
		}
		return true;
	}
	for (let e of test) {
		// console.log(test[i]);
		// console.log("EEEEEEEEEEEEEEEE = ", e);
		let flag = checkDFS(e, [], 0);
		if (flag) {
			// console.log(e, flag);
			answer++;
			map.set(e.join(""), 0);
			// console.log(map);
		} else {
			// console.log("FALSE asdasd ", e);
		}
	}

	return answer;
}