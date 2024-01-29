const [len, str, limit] = require("fs").readFileSync("dev/stdin").toString().split("\n");
const arr = str.split(" ").map(Number);

let start = 1;
let end = Math.max(...arr);
let result = 1;

while(start <= end){
	const mid = Math.floor((start + end) / 2);
	const sum = arr.reduce((a, v) => a + Math.min(mid, v), 0);
	if(sum <= limit){
		result = mid;
		start = mid + 1;
	} else{
		end = mid - 1;
	}
}
console.log(result)

