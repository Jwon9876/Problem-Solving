const fs = require("fs")
const input  = fs.readFileSync("/dev/stdin").toString().split("\n")

const [count, index] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b)
console.log(arr[index - 1])