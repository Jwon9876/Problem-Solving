const fs = require("fs")
const [n, k] = fs.readFileSync("Problem10.txt").toString().trim().split(" ").map(Number);

console.log(n, k)


홀수면 반올림
짝수면 올림

5 2
1 4
2 3



7 3
1 2 4

