const fs = require("fs");
const input = fs.readFileSync('Problem1.txt').toString().split('\n');

const answer = input[0].split(" ").sort((a, b) => a - b )
for (let i = 0; i < answer.length; i++) {
	console.log(answer[i])
}
