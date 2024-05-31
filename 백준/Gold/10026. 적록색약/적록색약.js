const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const board = b.map(v => v.split(""));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const countNormalArea = {
	R: 0,
	G: 0,
	B: 0,
};

const countAbnormalArea = {
	R: 0,
	B: 0,
};

const visitedNormal = new Array(n).fill(null).map(_ => new Array(n).fill(false));
const visitedAbnormal = new Array(n).fill(null).map(_ => new Array(n).fill(false));


const dfs = (flag, x, y, visited) => {
	if(visited[x][y]) return;
	
	if (0 > x || x >= n || 0 > y || y >= n) return;
	
	visited[x][y] = true;
	for (let i = 0; i < 4; i++) {
		const nx = x + dx[i];
		const ny = y + dy[i];
		if(nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
		if(board[nx][ny] == flag) dfs(flag, nx, ny, visited);
	}
};


for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		if (!visitedNormal[i][j]) {
			const flag = board[i][j];
			dfs(board[i][j], i, j, visitedNormal)
			countNormalArea[flag]++;
		}
	}
}

for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		if (board[i][j] == "G") board[i][j] = "R"
	}
}

for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		if (!visitedAbnormal[i][j]) {
			const flag = board[i][j];
			dfs(board[i][j], i, j, visitedAbnormal)
			countAbnormalArea[flag]++;
		}
	}
}

const sumNormalArea = countNormalArea.R + countNormalArea.G + countNormalArea.B
const sumAbnormalArea = countAbnormalArea.R + countAbnormalArea.B

console.log(sumNormalArea, sumAbnormalArea)

