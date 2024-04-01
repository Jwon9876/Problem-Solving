const [a, b, ...arr] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const k = +b;
const visited = new Array(n).fill(false);

const set = new Set();

const dfs = (str, depth) => {
	
	if(depth == k){
		set.add(str);
		return;
	}
	
	for (let i = 0; i < n; i++) {
		if(visited[i]) continue;
		visited[i] = true;
		dfs(str + arr[i], depth + 1);
		visited[i] = false;
	}
}

dfs("", 0);

console.log(set.size)
