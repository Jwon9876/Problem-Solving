// LIS + 이진탐색
// 아이디어 : 현재 원소가 가장 크다면 뒤에 삽입하고, 그렇지 않다면 최대한 왼쪽의 원소와 교체

const [a, b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");


const len = +a;
const arr = b.split(" ").map(Number).reverse();

const resultArr = [];

const lowerBound = (arr, target) => {
	let start = 0;
	let end = arr.length;
	let mid = 0;
	
	while(start < end){
		mid = Math.floor((start + end) / 2);
		if(arr[mid] >= target){
			end = mid;
		} else{
			start = mid + 1
		}
	}
	return end;
}

for (const e of arr) {
	if(resultArr.at(resultArr.length - 1) < e){
		resultArr.push(e);
	}
	else{
		const id = lowerBound(resultArr, e);
		resultArr[id] = e;
	}
}

console.log(len - resultArr.length)
