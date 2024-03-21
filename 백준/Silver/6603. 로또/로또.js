const [...a] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
a.pop();

a.forEach((v, i) => {
	const temp = a[i].split(" ").map(Number);
	const n = temp.at(0);
	const numSetArr = temp.splice(1);
	const visited = new Array(n).fill(false);
	
	const arr = [];
	const result = [];
	
	const dfs = (depth, start) => {
		
		if (depth == 6) {
			result.push([...arr]);
			return
		}
		
		for (let i = start; i < n; i++) {
			if (visited[i]) continue;
			visited[i] = true;
			arr.push(numSetArr[i]);
			dfs(depth + 1, i + 1);
			visited[i] = false;
			arr.pop()
		}
		
	}
	
	dfs(0, 0);
	
	const answer = result.map(v => v.join(" ")).join("\n")
	console.log(answer)
	console.log()
})
