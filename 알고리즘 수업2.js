const fs = require("fs");
const [cnt] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(cnt + "\n" + 1);
