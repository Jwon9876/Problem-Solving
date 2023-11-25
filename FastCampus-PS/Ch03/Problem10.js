const fs = require("fs")
const str = fs.readFileSync("Problem10.txt").toString().trim();

const arr = str.split("");

const count = new Array(10).fill(0);

for (const ele of arr) {
	count[ele]++;
}

const answer = []

for (let i = count.length - 1; i >= 0 ; i--) {
	let n = 0;
	while(n < count[i]){
		answer.push(i);
		n++;
	}
}

console.log(answer.join(""))
