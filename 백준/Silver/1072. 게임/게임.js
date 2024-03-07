const [a, b] = require("fs").readFileSync("dev/stdin").toString().trim().split(" ");

const x = +a;
const y = +b;

const getPercent = (divisor, dividend) => Math.floor((100 * divisor) / dividend);

const solution = (x, y) => {
	
	const z = getPercent(y, x);
	
	if (99 <= z)
		return -1;
	
	let start = 1;
	let end = 1e9 + 1;
	let result = -1;
	
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		
		const current = getPercent(y + mid, x + mid);
		
		if (current > z) {
			result = mid;
			end = mid - 1;
		} else {
			start = mid + 1;
		}
		
	}
	
	return result
	
}

const answer = solution(x, y);

console.log(answer)
