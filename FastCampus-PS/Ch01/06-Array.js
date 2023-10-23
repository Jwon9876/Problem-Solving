let fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('06-Array-01.txt').toString().split('\n');

const count = input[0];
const arr = input[1].split(" ");

const min = Math.min(...arr)
const max = Math.max(...arr)

console.log(min, max, arr)

