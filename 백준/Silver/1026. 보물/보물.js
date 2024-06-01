const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const arrA = b[0].split(" ").map(Number);
const arrB = b[1].split(" ").map(Number);

const sortedA = arrA.sort((a, b) => a - b);
const sortedB = arrB.sort((a, b) => b - a);

const sum = sortedA.reduce((a, v, i) => a + (v * sortedB[i]), 0);

console.log(sum)
