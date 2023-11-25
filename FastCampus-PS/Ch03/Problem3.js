const fs = require("fs");
const input = fs.readFileSync('Problem3.txt').toString().split('\n');

const len = input[0];
const arr = [];
for (let i = 1; i <= len; i++) {
	arr.push(Number(input[i]))
}
const sorted = arr.sort((a, b) => a - b);
let answer = "";
for (let i = 0; i < sorted.length; i++) {
	answer += sorted[i] + "\n"
}
console.log(answer)


