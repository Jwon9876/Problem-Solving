const [a, b] = require("fs").readFileSync("dev/stdin").toString().trim().split(" ");

const n = +a;
const m = +b;


const result = [];
const arr = [];

const visited = new Array(n + 1).fill(false);

const dfs = (depth, start) => {
	
	if(depth == m){
		result.push([...arr]);
		return
	}
	
	for (let i = start + 1; i <= n; i++) {
		if(visited[i]) continue;
		visited[i] = true;
		arr.push(i);
		dfs(depth + 1, i);
		visited[i] = false;
		arr.pop()
	}
}

dfs(0, 0);

const answer = result.map(v => v.join(" ")).join("\n");

console.log(answer);
