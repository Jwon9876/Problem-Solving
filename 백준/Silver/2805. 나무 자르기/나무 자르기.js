const [a, b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n")
const [count, n] = a.split(" ").map(Number);
const arr = b.split(" ").map(Number);

let start = 1;
let end = Math.max(...arr)
let mid = 0;

let result = 0;
while (start <= end){
	mid = Math.floor((start + end) / 2);
	const sum = arr.map((v) => {
		if(v > mid) return v - mid;
		return 0;
	}).reduce((a, v) => a + v, 0);
	
	if(sum < n){
		end = mid - 1;
	} else{
		result = mid
		start = mid + 1;
	}
}

console.log(result)
