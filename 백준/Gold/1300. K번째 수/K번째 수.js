const a = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, k] = a.map(Number);

let start = 1;
let end = n * n;
let result = 0;

while(start <= end){
	let mid = Math.floor((start + end) / 2);
	let count = 0;
	for (let i = 1; i <= n; i++) {
		count += Math.min(n, Math.floor(mid / i));
	}
	
	if(count >= k){
		result = mid
		end = mid - 1;
	} else{
		start = mid + 1;
	}
}


console.log(result)
