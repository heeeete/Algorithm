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
	const tempArr = [];

	function dfs(arr, idx, cnt) {
		if (arr.length === cnt) {
			if (search(arr)) tempArr.push(arr);
		}
		for (let i = idx; i < relation[0].length; i++) {
			dfs([...arr, i], i + 1, cnt);
		}
	}

	for (let i = 1; i <= relation[0].length; i++) {
		dfs([], 0, i);
	}

	const map = new Map();

	function checkDFS(target, arr, idx) {
		if (arr.length && arr.length !== target.length) {
			let temp = "";
			for (let i = 0; i < target.length; i++) {
				if (arr.indexOf(i) === -1) temp += target[i];
			}
			if (map.has(temp)) return false;
		}
		for (let i = idx; i < target.length; i++) {
			let flag = checkDFS(target, [...arr, i], i + 1);
			if (!flag) return false;
		}
		return true;
	}
	for (let e of tempArr) {
		let flag = checkDFS(e, [], 0);
		if (flag) {
			answer++;
			map.set(e.join(""), 0);
		}
	}

	return answer;
}
