const [a, b] = require("fs").readFileSync("dev/stdin").toString().trim().split(" ");

const n = +a;
const m = +b;


const result = [];
const arr = [];

const dfs = (depth, start) => {
	
	if(depth == m){
		result.push([...arr]);
		return;
	}
	
	for (let i = start; i <= n ; i++) {
		
		arr.push(i);
		dfs(depth + 1, i);
		arr.pop();
	}
	
}

dfs(0, 1);

const answer = result.map(v => v.join(" ")).join("\n");

console.log(answer);
