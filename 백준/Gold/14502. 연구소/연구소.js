const [a, ...b] = require('fs').readFileSync('dev/stdin').toString().split('\n');

const [n, m] = a.split(' ').map(Number);
const board = b.map(v => v.split(" ").map(Number));
const temp = new Array(n).fill(null).map(_ => new Array(m).fill(0));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let result = 0;

const virus = (x, y) => {
	for (let i = 0; i < 4; i++) {
		let nx = x + dx[i];
		let ny = y + dy[i];
		if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
		if (temp[nx][ny] == 0) {
			temp[nx][ny] = 2;
			virus(nx, ny);
		}
	}
}

const getScore = () => {
	let score = 0;
	for (let i = 0; i < n; i++)
		for (let j = 0; j < m; j++)
			if (temp[i][j] == 0) score += 1;
	return score;
}


const dfs = (count) => {
	if (count == 3) {
		for (let i = 0; i < n; i++)
			for (let j = 0; j < m; j++)
				temp[i][j] = board[i][j];
		
		for (let i = 0; i < n; i++)
			for (let j = 0; j < m; j++)
				if (temp[i][j] == 2) virus(i, j);
		result = Math.max(result, getScore());
		return;
	}
	for (let i = 0; i < n; i++)
		for (let j = 0; j < m; j++)
			if (board[i][j] == 0) {
				board[i][j] = 1;
				dfs(count + 1);
				board[i][j] = 0;
			}
}

dfs(0);
console.log(result);
