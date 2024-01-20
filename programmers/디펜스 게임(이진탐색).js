function check(n, k, mid, enemy) {
	let sum = 0;
	enemy = enemy.spice(0, mid);
	if (k >= enemy.length) return true;
	enemy.sort((a, b) => b - a);
	for (let e of enemy) {
		if (k) k--;
		else sum += e;
	}
	if (sum > k) return false;
	else return true;
}

function solution(n, k, enemy) {
	let lf = 0,
		rt = enemy.length;
	while (lf <= rt) {
		let mid = ~~(lf + rt) / 2;
		if (check(n, k, mid, [...enemy])) {
			lf = mid + 1;
		} else rt = mid - 1;
	}
	return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.slice(2, 6));
