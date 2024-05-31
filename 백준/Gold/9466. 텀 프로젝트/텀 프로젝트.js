const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let n = +a;
let result = [];

const dfs = (cur, graph, visited, finished) => {
	visited[cur] = true;
	let next = graph[cur];
	
	if(!visited[next]){
		dfs(next, graph, visited, finished);
	}
	else if(!finished[next]){
		while (next != cur){
			result.push(next)
			next = graph[next]
		}
		result.push(cur)
	}
	finished[cur] = true;
}

let index = 0;


while(n > 0){
	const node = +b[index];
	const graph = [0, ...b[index + 1].split(" ").map(Number)];
	const visited = new Array(node + 1).fill(false);
	const finished = new Array(node + 1).fill(false);
	for (let i = 1; i <= node; i++) {
		if(!visited[i]) dfs(i, graph, visited, finished);
	}
	console.log(node - result.length)
	result = [];
	n--;
	index += 2;
	
}
