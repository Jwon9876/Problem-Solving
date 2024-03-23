const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [r, c] = a.split(" ").map(Number);
const board = b.map(v => v.split(""));


const visited = new Set();

const dirX = [0, 0, -1, 1];
const dirY = [-1, 1, 0, 0];

let maxDepth = 0;

const dfs = (depth, y, x) => {
    
	maxDepth = Math.max(depth, maxDepth);
    
    if(depth == r * c) return;
	
	for (let i = 0; i < 4; i++) {
		const cy = y + dirY[i];
		const cx = x + dirX[i];
		
		// 상하좌우 경계값 확인
		if(cy < 0 || cy >= r || cx < 0 || cx >= c) continue;
		if(visited.has(board[cy][cx])) continue;
		
		visited.add(board[cy][cx]);
		dfs(depth + 1, cy, cx);
		visited.delete(board[cy][cx]);
		
	}
}

visited.add(board[0][0]);

dfs(1, 0, 0);

console.log(maxDepth)
