const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [countNode, countNodePair] = a.split(" ").map(Number);
const arrFromToDistance = b.splice(0, countNode - 1).map(v => v.split(" ").map(Number));
const arrFromToNodePair = b.map(v => v.split(" ").map(Number));


const graph = Array.from({length: countNode + 1}, () => []);

arrFromToDistance.map(v => {
	const [from, to, d] = v;
	graph[from].push([to, d]);
	graph[to].push([from, d]);
})

const dfs = (from, distance, arrDistance, visited) => {
	
	if(visited[from]) return;
	visited[from] = true;
	arrDistance[from] = distance;
	
	for (const [to, d] of graph[from]) {
		dfs(to, distance + d, arrDistance, visited)
	}
	
	
}

for (const [x, y] of arrFromToNodePair) {
	const visited = new Array(countNode + 1).fill(false);
	const arrDistance = new Array(countNode + 1).fill(0);
	dfs(x, 0, arrDistance, visited);
	console.log(arrDistance.at(y));
}




