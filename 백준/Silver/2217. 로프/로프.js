const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const arr = b.map(Number).sort((a, b) => a - b);

let max = -1;

for (let i = 0; i < arr.length; i++) {
	const cur = arr[i] * (n - i);
	if(cur > max) max = cur;
}

console.log(max)

/*
*
* 5 10 30
* 2개만 써서 20을 들면 됌
*
* */
