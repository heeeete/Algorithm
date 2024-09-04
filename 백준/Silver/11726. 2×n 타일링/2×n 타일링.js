const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

if (N === 1 || N === 2) return N === 1 ? console.log(1) : console.log(2);

let prev = 2;
let prevPrev = 1;
let answer = 0;
for (let i = 3; i <= N; i++) {
	answer = (prev + prevPrev) % 10007;
	prevPrev = prev % 10007;
	prev = answer;
}

return console.log(prev);
