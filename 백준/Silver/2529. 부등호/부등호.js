const [a, b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const inequality = b.split(" ");

const visited = new Array(10).fill(false);

const arr = [];
const result = [];


const dfs = (depth) => {
	
	if (depth == n + 1) {
		
		let flag = true;
		
		for (let i = 0; i < n; i++) {
			if(inequality[i] == ">" && arr[i] < arr[i + 1]){
				flag = false;
				return;
			}
			
			if(inequality[i] == "<" && arr[i] > arr[i + 1]){
				flag = false
				return;;
			}
		}

		if (flag) {
			result.push([...arr])
		}
	}
	
	for (let i = 0; i < 10; i++) {
		if (visited[i]) continue;
		visited[i] = true;
		arr.push(i);
		dfs(depth + 1)
		visited[i] = false;
		arr.pop();
	}
}

dfs(0);

const first = result.at(0).join("");
const last = result.at(-1).join("");

console.log(last)
console.log(first)
