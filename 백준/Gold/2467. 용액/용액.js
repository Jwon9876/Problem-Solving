const [a, b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const arr = b.split(" ").map(Number).sort((a, b) => a - b);

let lhs = 0;
let rhs = arr.length - 1;
let result = 2e9+1;
let answer;


while (lhs < rhs){
	const current = arr[lhs] + arr[rhs];
	
	if(Math.abs(current) <= result){
		answer = [arr[lhs], arr[rhs]].join(" ");
		result = Math.abs(current)
	}
	
	if(current < 0){
		lhs += 1;
	} else if(current == 0){
		break;
	} else{
		rhs -= 1;
	}
}

console.log(answer)
