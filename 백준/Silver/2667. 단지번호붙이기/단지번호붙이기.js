const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;

const board = b.map(v => v.split("").map(Number));

const answer = [];

let count = 0;

const dfs = (x, y, depth) => {
	
	if (0 > x || x >= n || 0 > y || y >= n) return;
	const cur = board[x][y];
	
	if (!cur) return;
	board[x][y] = 0
	count += 1;
	
	dfs(x - 1, y)
	dfs(x + 1, y)
	dfs(x, y - 1)
	dfs(x, y + 1)
	
}

for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		if (board[i][j]) {
			dfs(i, j)
			answer.push(count);
			count = 0;
		}
	}
}

console.log([answer.length, ...answer.sort((a, b) => a - b)].join("\n"))


