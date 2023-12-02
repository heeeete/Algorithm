function solution(array, commands) {
	var answer = [];

	for (let i = 0; i < commands.length; i++) {
		const arr = array.slice(commands[i][0], commands[i][1] + 1);
		console.log(arr);
	}
	return answer;
}
