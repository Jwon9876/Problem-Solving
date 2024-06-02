const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const tree = Array.from({length: n + 1}, () => []);

b.map(v => v.split(" ")).map(v => {
	const [x, y] = v.map(Number);
	tree[x].push(y);
	tree[y].push(x);
});

const visited = new Array(n + 1).fill(false);
const parent = new Array(n + 1).fill(false);

const dfs = (x) => {
	for (const y of tree[x]) {
		if (!visited[y]){
			visited[y] = x;
			dfs(y);
		}
	}
}

dfs(1)

console.log(visited.splice(2).join("\n"))
