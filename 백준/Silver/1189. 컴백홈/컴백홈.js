const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [r, c, k] = a.split(" ").map(Number);
const board = b.map(v => v.split(""));
const visited = board;

let count = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];


const dfs = (x, y, depth) => {
	
	
	if(0 > x || x >= r || 0 > y || y >= c){
		return;
	}
	
	if(visited[x][y] == "T") return;
	
	visited[x][y] = "T"
	
	for (let i = 0; i < 4; i++) {
		dfs(x + dx[i], y + dy[i], depth + 1);
	}
	
	// 현재 위치가 [0][r - 1]
	if(depth + 1 == k && x == 0 && y == c - 1) count++;
	visited[x][y] = ".";
}


dfs(r - 1, 0, 0);

console.log(count)
