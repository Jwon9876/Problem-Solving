const a = require("fs").readFileSync("dev/stdin").toString().trim()

const n = +a;

const visited = new Array(n + 1).fill(false);
const result = [];
const arr = []

const dfs = (depth) => {

	if(depth == n){
		result.push([...arr]);
		return;
	}

	for (let i = 1; i <= n; i++) {

		if(visited[i] == true) continue;
		visited[i] = true;
		arr.push(i);
		dfs(depth + 1);
		visited[i] = false;
		arr.pop();
	}

}

dfs(0);

const answer = result.map(v => v.join(" ")).join("\n");

console.log(answer);



