const fs = require("fs");
const input = fs
	.readFileSync(0)
	.toString()
	.trim()
	.split(/([-+])/)
	.map((e) => {
		if (e !== "+" && e !== "-") return Number(e);
		else return e;
	});

for (let i = 1; i < input.length; i += 2)
	if (input[i] === "+") {
		const temp = input[i - 1] + input[i + 1];
		input.splice(i - 1, 3, temp);
		i -= 2;
	}

console.log(eval(input.join("")));
