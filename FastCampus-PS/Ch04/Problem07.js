const fs = require("fs")
const [a, b, c] = fs.readFileSync("Problem07.txt").toString().trim().split("\n");

const n = +a;
const dist = b.split(" ").map(BigInt);
const cost = c.split(" ").map(BigInt);

let cur = cost.at(0);
let answer = BigInt(0);

for (let i = 0; i < dist.length; i++) {
	if(cur > cost[i]){
		cur = cost[i]
	}
	answer += cur * dist[i];
}
console.log(answer.toString())


