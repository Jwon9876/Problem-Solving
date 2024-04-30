const [a, b, ...c] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const countNode = +a;
const countEdge = +b;

const graph = new Array(countNode + 1).fill([]).map(v => new Array().fill([]))


c.map(v => {
	const [x, y] = v.split(" ");
	graph[x].push(y);
	graph[y].push(x);
})

const visited = new Array(a + 1).fill(false);

let cnt = 0;

const dfs = (i) => {
	
	visited[i] = true;
	cnt++;
	
	for (const e of graph[i]) {
		if(!visited[e]) dfs(e);
	}
}

dfs(1);

console.log(cnt - 1)
