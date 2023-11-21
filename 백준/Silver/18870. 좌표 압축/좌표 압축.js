const fs = require("fs");
const [n, strArr] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const arr = strArr.split(" ").map(v => +v);
const set = new Set(arr)
const notDupArr = [...set].sort((a, b) => a - b)

const arrIndexObj = {};

notDupArr.forEach((v, i) => {
	arrIndexObj[v] = i
})

let answer = "";

for (const ele of arr) {
	answer += arrIndexObj[ele] + " "
}

console.log(answer)
