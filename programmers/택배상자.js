// 기존 컨베이어 벨트, 보조 컨베이어 벨트 둘다 POP으로 풀기
// 기존 컨베이어 벨트는 내림차순 배열이라고 생각
// 보조 컨베이어 벨트에 push로 값 넣기
function solution(order) {
	var answer = 0;
	let len = order.length;
	let origin = Array.from({ length: len }, () => 0);
	let assistant = [];

	for (let i = 0; i < len; i++) origin[i] = len - i;

	for (let i = 0; i < len; i++) {
		if (assistant.indexOf(order[i]) === -1)
			while (origin.length && origin[origin.length - 1] !== order[i])
				assistant.push(origin.pop());
		if (origin[origin.length - 1] === order[i]) {
			origin.pop();
		} else if (assistant[assistant.length - 1] === order[i]) {
			assistant.pop();
		} else return answer;
		answer++;
	}

	return answer;
}

console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));
