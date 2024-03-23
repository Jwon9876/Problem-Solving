const a = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;

const board = [];

let count = 0;

const isPossible = (y, x) => {
	for (const [r, c] of board) {
		if(r == y || c == x || Math.abs(r - y) == Math.abs(c - x)){
			return false
		}
	}
	return true;
}


const dfs = (row) => {
	
	if(row == n){
		count++;
		return
	};
	
	for (let i = 0; i < n; i++) {
		if(!isPossible(row, i)) continue;
		
		board.push([row, i]);
		dfs(row + 1);
		board.pop();
	}
}

dfs(0);

console.log(count);






