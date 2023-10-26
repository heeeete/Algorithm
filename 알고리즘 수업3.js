const fs = require("fs");
const [cnt] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(cnt * cnt + "\n" + 2);
