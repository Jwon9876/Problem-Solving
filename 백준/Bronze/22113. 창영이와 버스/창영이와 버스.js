const fs = require("fs")
const [str, pathStr, ...arr] = fs.readFileSync("dev/stdin").toString().trim().split("\n")

// console.log(str, pathStr, arr)

const pathArr = pathStr.split(" ").map(Number)

const matrix = arr.map(v => v.split(" ").map(Number))

let sum = 0;
for (let i = 0; i < pathArr.length - 1; i++) {
    const row = pathArr[i];
    const col = pathArr[i + 1];
    sum += matrix[row - 1][col - 1]
}
console.log(sum)