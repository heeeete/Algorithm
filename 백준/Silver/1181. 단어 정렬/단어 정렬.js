const fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input = [...new Set(input)];

input.sort((a, b) => {
	if (a.length === b.length) return a.localeCompare(b);
	else return a.length - b.length;
});

console.log(input.join("\n"));
