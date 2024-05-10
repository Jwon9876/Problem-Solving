const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let iterCount = +a;

const dfs = (x, y, w, h, board) => {
	
	if (x < 0 || x >= w || y < 0 || y >= h) return;
	
	if (board[y][x] == 0) return false;
	
	board[y][x] = 0;
	dfs(x, y - 1, w, h, board);
	dfs(x, y + 1, w, h, board);
	dfs(x - 1, y, w, h, board);
	dfs(x + 1, y, w, h, board);
	
	return true;
	
}


while (iterCount > 0) {
	
	const [w, h, c] = b.splice(0, 1)[0].split(" ").map(Number);
	let board = new Array(h).fill(null).map(_ => new Array(w).fill(0));
	b.splice(0, c).map(v => v.split(" ").map(Number)).map(pos => {
		const [x, y] = pos;
		board[y][x] = 1;
	})
	
	let cnt = 0;
	for (let i = 0; i < w; i++) {
		for (let j = 0; j < h; j++) {
			if (dfs(i, j, w, h, board)) cnt++;
		}
	}
	
	console.log(cnt)
	
	iterCount--;
}









