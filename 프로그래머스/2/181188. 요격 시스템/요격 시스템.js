function solution(targets) {
	var answer = 1;
	targets.sort((a, b) => b[0] - a[0]);

	var start = targets[0][0];
	for (var i = 1; i < targets.length; i++) {
		if (start >= targets[i][1]) {
			start = targets[i][0];
			answer++;
		}
	}

	return answer;
}