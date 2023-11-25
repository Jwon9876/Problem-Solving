const fs = require("fs")
const input  = fs.readFileSync("Problem4.txt").toString().split("\n")

const [count, index] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b)
console.log(arr[index - 1])
