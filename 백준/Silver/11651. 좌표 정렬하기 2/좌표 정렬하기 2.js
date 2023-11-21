const fs = require("fs")
const [n, ...strArr] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const count = parseInt(n);

const splitArr = strArr.map(v => v.split(" ").map(v => parseInt(v)))

const sortedArr = splitArr.sort((a, b) => {
	if(a[1] == b[1]) return a[0] - b[0]
	return a[1] - b[1]
})

let answer = "";

for (let i = 0; i < sortedArr.length; i++) {
	answer += `${sortedArr[i][0]} ${sortedArr[i][1]}\n`
}

console.log(answer)


