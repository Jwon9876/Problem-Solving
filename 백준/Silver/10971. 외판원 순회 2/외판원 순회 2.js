const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");


const n = +a;
const board = b.map(v => v.split(" ").map(Number));

const arr = [];

const visited = new Array(n).fill(false);

let minValue = Infinity;

const dfs = (depth) => {
	
	if(depth == n){
		const temp = [...arr, arr[0]];
		let sum = 0;
		for (let i = 0; i < temp.length - 1; i++) {
			const row = temp[i + 1];
			const col = temp[i];
			const value = board[col][row];
			
			if(value == 0){
				return;
			}
			sum += value;
		}
		minValue = Math.min(minValue, sum)
		return
	}
	
	for (let i = 0; i < n; i++) {
		if(visited[i]) continue;
		visited[i] = true;
		arr.push(i);
		dfs(depth + 1);
		visited[i] = false;
		arr.pop();
	}
}

dfs(0);

console.log(minValue)
