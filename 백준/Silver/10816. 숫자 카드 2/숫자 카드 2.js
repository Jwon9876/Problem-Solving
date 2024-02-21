const [a, b, c, d] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const numberCardArr = b.split(" ").map(Number).sort((a, b) => a - b);

const m = +c;
const ownedCardArr = d.split(" ").map(Number);

const lowerBound = (arr, target) => {
	
	let start = 0;
	let end = arr.length - 1;
	let mid = 0;
	
	while(start <= end){
		mid = Math.floor((start + end) / 2);
		if(arr[mid] >= target) end = mid - 1;
		else start = mid + 1;
	}
	
	return end;
	
}

const upperBound = (arr, target) => {
	
	let start = 0;
	let end = arr.length - 1;
	let mid = 0;
	
	while(start <= end){
		mid = Math.floor((start + end) / 2);
		if(arr[mid] > target) end = mid - 1;
		else start = mid + 1;
	}
	
	return end;
}

const result = ownedCardArr.map(v => upperBound(numberCardArr, v) - lowerBound(numberCardArr, v));
console.log(result.join(" "));
