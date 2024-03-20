function check(arr) {
	const stack = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "(") stack.push("(");
		else {
			if (!stack.length) return 1;
			stack.pop();
		}
	}
	if (!stack.length) return 0;
	else return 1;
}

function solution(p) {
	var answer = "";
	let w = p.split("");

	function rec(a, b) {
		if (!b.length) return "";
		let Lcnt = 0;
		let Rcnt = 0;

		for (let i = 0; i < b.length; i++) {
			if (b[i] === "(") Lcnt++;
			else Rcnt++;
			if (Lcnt !== 0 && Rcnt !== 0 && Lcnt === Rcnt) {
				a = b.splice(0, i + 1);
				break;
			}
		}

		let flag = check(a);

		if (flag === 0) {
			return a.join("") + rec([], b);
		} else {
			a.splice(0, 1);
			a.splice(a.length - 2, 1);
			let temp = [];
			for (let i = 0; i < a.length; i++) {
				if (a[i] === "(") temp.push(")");
				else temp.push("(");
			}

			return "(" + rec([], b) + ")" + temp.join("");
		}
	}

	answer = rec([], w);
	return answer;
}

console.log(solution("()))((()"));
