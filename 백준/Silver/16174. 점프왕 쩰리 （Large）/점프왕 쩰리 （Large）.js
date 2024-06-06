const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const board = b.map(v => v.split(" ").map(Number));
const visited = new Array(n).fill(null).map(_ => new Array(n).fill(false));
const dx = [1, 0];
const dy = [0, 1];

const dfs = (x, y) => {
    if (x === n - 1 && y === n - 1) {
        return true;
    }

    if (x < 0 || x >= n || y < 0 || y >= n) return false;
    if (visited[x][y]) return false;

    visited[x][y] = true;

    for (let i = 0; i < 2; i++) {
        const nx = x + board[x][y] * dx[i];
        const ny = y + board[x][y] * dy[i];
        if (dfs(nx, ny)) return true;
    }

    return false;
}


console.log(dfs(0, 0) ? "HaruHaru" : "Hing")
