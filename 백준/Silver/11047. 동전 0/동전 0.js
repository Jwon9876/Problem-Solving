const fs = require("fs")
const [a, ...b] = fs.readFileSync("dev/stdin").toString().trim().split("\n");


let [n, target] = a.split(" ").map(Number);
const values = b.map(Number);

let sum = 0;

for (let i = n - 1; i >= 0; i--) {
	if(target >= values[i]){
		sum += Math.floor(target / values[i]);
		target %= values[i];
	}
}
console.log(sum)

