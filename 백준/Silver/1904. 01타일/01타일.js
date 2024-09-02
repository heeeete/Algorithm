const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

// 구하려는 수의 이전 값은 앞에 + 1
// 구하려는 수의 이전전 값은 앞에 + 00
let answer = 0;
let prev = 2;
let prevPrev = 1;
if (N === 1 || N === 2) return N === 1 ? console.log(1) : console.log(2);
for (let i = 3; i <= N; i++) {
	answer = (prev % 15746) + (prevPrev % 15746);
	prevPrev = prev % 15746;
	prev = answer;
}

return console.log(answer % 15746);
