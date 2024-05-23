// https://www.acmicpc.net/problem/4803

const [...a] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const testCases = a.splice(0, a.length - 1).map(v => v.split(" ").map(Number));

const testCasesSplitArr = [];

while (testCases.length > 0) {
	const [n, m] = testCases.at(0);
	const split = testCases.splice(0, m + 1);
	testCasesSplitArr.push(split);
}

const dfs = (cur, prev, graph, visited) => {
	
	visited[cur] = true;
	
	for (const next of graph[cur]) {
		if (!visited[next]) {
			if (dfs(next, cur, graph, visited)) return true;
		} else if (next != prev) return true;
	}
	
	return false;
	
}

const printTreeCase = (cnt, i) => {
	switch (cnt){
		case 0:
			return `Case ${i}: No trees.`;
		case 1:
			return `Case ${i}: There is one tree.`;
		default:
			return `Case ${i}: A forest of ${cnt} trees.`
	}
}


testCasesSplitArr.map((v, i) => {
	const [n, m] = v.splice(0, 1)[0];
	const graph = Array.from({length: n + 1}, () => []);
	const visited = new Array(n + 1).fill(false);
	
	v.forEach((e) => {
		const [x, y] = e;
		graph[x].push(y);
		graph[y].push(x);
	})
	
	let count = 0;
	for (let i = 1; i <= n; i++) {
		if (!visited[i] && !dfs(i, 0, graph, visited)) count += 1;
		
	}
	console.log(printTreeCase(count, i + 1));
})
