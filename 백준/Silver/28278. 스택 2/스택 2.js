const fs = require("fs");
const [n, ...data] = fs
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((e) => e.split(" ").map((e) => Number(e)));

class stack {
	constructor() {
		this.stack = [];
		this.answer = [];
	}

	parse(command) {
		if (command[0] === 1) this.stack.push(command[1]);
		else if (command[0] === 2)
			this.answer.push(this.stack.length ? this.stack.pop() : -1);
		else if (command[0] === 3) this.answer.push(this.stack.length);
		else if (command[0] === 4) this.answer.push(this.stack.length ? 0 : 1);
		else if (command[0] === 5)
			this.answer.push(
				this.stack.length ? this.stack[this.stack.length - 1] : -1
			);
	}
}

const a = new stack();
for (const command of data) a.parse(command);
console.log(a.answer.join("\n"));
