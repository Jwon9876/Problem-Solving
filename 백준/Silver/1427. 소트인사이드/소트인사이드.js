const fs = require("fs")
const str = fs.readFileSync("dev/stdin").toString().trim();

const arr = str.split("");
console.log(arr.sort().reverse().join(""))