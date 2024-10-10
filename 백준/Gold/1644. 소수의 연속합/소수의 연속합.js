const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

const primes = [];

function checkPrime(n) {
	for (let i = 2; i * i <= n; i++) {
		if (n % i === 0) return false;
	}
	return true;
}

for (let i = 2; i <= n; i++) {
	if (checkPrime(i)) primes.push(i);
}

let l = 0;
let r = 0;
let sum = primes[0];
let cnt = 0;
while (r < primes.length) {
	if (sum < n) sum += primes[++r];
	else if (sum > n) sum -= primes[l++];
	else {
		sum += primes[++r];
		cnt++;
	}
}

console.log(cnt);
