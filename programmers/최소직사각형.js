function solution(sizes) {
	let maxW = -1;
	let maxH = -1;

	for (let size of sizes) {
		let w = Math.max(...size);
		let h = Math.min(...size);

		maxW = Math.max(w, maxW);
		maxH = Math.max(h, maxH);
	}

	return maxW * maxH;
}

console.log(
	solution([
		[60, 50],
		[30, 70],
		[60, 30],
		[80, 40],
	])
);
