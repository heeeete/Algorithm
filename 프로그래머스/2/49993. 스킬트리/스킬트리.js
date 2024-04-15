function solution(skill, skill_trees) {
	let answer = 0;
	const obj = {};
	const arr = skill.split("");

	for (let i = 0; i < skill_trees.length; i++) {
		let flag = 1;
		for (let s of arr) {
			obj[s] = -1;
		}
		for (let j = 0; j < skill_trees[i].length; j++) {
			if (obj[skill_trees[i][j]]) {
				let idx = arr.indexOf(skill_trees[i][j]);
				if (idx === 0) obj[arr[idx]] = 1;
				else {
					idx--;
					if (obj[arr[idx]] === -1) {
						flag = 0;
						break;
					} else obj[arr[++idx]] = 1;
				}
			}
		}
		if (flag) answer++;
	}
	return answer;
}