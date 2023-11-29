const fs = require("fs");
const [n, str] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const count =  +n;
const arr = str.split(" ").map(Number).sort((a, b) => a - b);

const sumArr = [arr.at(0)];

for (let i = 1; i < arr.length; i++) {
    let temp = sumArr[i - 1] + arr[i];
    sumArr.push(temp)
}
console.log(sumArr.reduce((a, v) => a + v, 0))