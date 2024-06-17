const [a, b] = require('fs').readFileSync('dev/stdin').toString().split('\n');

const n = +a;
const arr = b.split(" ").map(Number);

let maxSum = -1e+9;
const arrResult = [];
const visited = new Array(n).fill(false);

const dfs = (depth) => {
	
	if(depth == n){
		let sum = 0;
		for (let i = 0; i < n - 1; i++) {
			sum += Math.abs(arrResult[i] - arrResult[i + 1]);
			maxSum = Math.max(maxSum, sum);
		}
	}
	
	for (let i = 0; i < n; i++) {
		if (visited[i]) continue;
		const next = arr[i];
		arrResult.push(next);
		visited[i] = true;
		dfs(depth + 1);
		visited[i] = false;
		arrResult.pop();
	}
	
}

dfs(0)
console.log(maxSum)
