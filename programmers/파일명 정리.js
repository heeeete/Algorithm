function solution(files) {
	var answer;

	function parse(file) {
		const match = file.match(/([a-zA-Z- .]*)(\d{1,5})(.*)/);
		return [match[1], parseInt(match[2]), match[3], match.input];
	}

	var answer = files.map((e) => parse(e));
	answer.sort((a, b) => {
		const aLower = a[0].toLowerCase();
		const bLower = b[0].toLowerCase();
		if (aLower < bLower) return -1;
		if (aLower > bLower) return 1;
		if (a[1] < b[1]) return -1;
		if (a[1] > b[1]) return 1;
		return 0;
	});
	return answer.map((e) => e[3]);
}

console.log(
	solution([
		"im   g12png",
		"img10.png",
		"img02.png",
		"img1.png",
		"IMG01.GIF",
		"img2.JPG",
	])
);
