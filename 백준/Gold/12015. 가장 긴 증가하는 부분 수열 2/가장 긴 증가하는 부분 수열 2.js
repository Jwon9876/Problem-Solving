const [a, b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const arr = b.split(" ").map(Number);

const lowerBound = (arr, target) => {
	
	let start = 0;
	let end = arr.length;
	
	while(start < end){
		const mid = Math.floor((start + end) / 2);
		
		if(arr[mid] >= target) end = mid;
		else start = mid + 1;
	}
	return end;
}

const result = [];

result.push(arr[0]);

arr.slice(1).forEach((v, i) => {
	if(result.at(result.length - 1) < v){
		result.push(v)
	} else {
		const id = lowerBound(result, v)
		result[id] = v;
	}
})


console.log(result.length)
