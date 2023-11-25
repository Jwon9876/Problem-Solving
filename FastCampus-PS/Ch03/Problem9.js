const fs = require("fs")
const [n, ...strArr] = fs.readFileSync("Problem9.txt").toString().trim().split("\n");


const arr = strArr.map((v) => v.split(" "))

const arrIndexObj = {};
arr.forEach((v, i) => {
	arrIndexObj[v] = i;
})



const sorted = arr.sort((a, b) => {
	// Stable Sort
	// if(a[0] == b[0]) return arrIndexObj[a[1]] - arrIndexObj[b[1]];
	return a[0] - b[0];
})

const answer = [];

for (const ele of sorted) {
	answer.push(ele.join(" "))
}

console.log(answer.join("\n"))




