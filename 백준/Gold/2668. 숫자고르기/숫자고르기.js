const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const graph = [0, ...b.map(Number)];

const visited = new Array(n + 1).fill(false);
const finished = new Array(n + 1).fill(false);
const result = [];

const dfs = (cur) => {
	visited[cur] = true;
	let next = graph[cur];
	
	/*
	다음을 방문을 안한 경우
	방문을 했는데 다음이 종료가 안된경우
	방문을 했는데 다음이 종료가 된 경우
	 */
	
	if(!visited[next]){
		dfs(next);
	} else if(!finished[next]){
		while(next != cur){
			result.push(next)
			next =  graph[next]
		}
		result.push(cur)
	}
	
	finished[cur] = true;
}

for (let i = 1; i <= n ; i++) {
	if(!visited[i]) dfs(i)
}

console.log([result.length, ...result.sort((a, b) => a- b)].join("\n"))
