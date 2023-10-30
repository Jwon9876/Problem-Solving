const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const count =  input[0];
const arr = [];

for (let i = 1; i <= count; i++) {
	arr.push(input[i].split(" ").map(Number))
}

arr.sort((a, b) => {
	if(a[0] == b[0]) return a[1] - b[1]
	return a[0] - b[0]
})

let answer = ""
for (const point of arr) {
	answer += point[0] + " " + point[1] + "\n"
}
console.log(answer)
