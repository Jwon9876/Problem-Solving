const [a, b, c] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const num = b.split(" ").map(Number);
const operator = ["+", "-", "*", "/"];
const usableOperator = c.split(" ")
						.map(Number)
						.reduce((a, v, i) => 	[...a, ...new Array(v).fill(operator[i])], []);

const result = [];
const arr = [];
const visited = new Array(usableOperator.length).fill(false);

const dfs = (depth) => {

	if(depth == usableOperator.length){
		let str = num[0];
		for (let i = 0; i < arr.length; i++) {
			if(arr[i] == "*"){
				str *= num[i + 1];
			} else if(arr[i] == "+"){
				str += num[i + 1];
			} else if(arr[i] == "-"){
				str -= num[i + 1];
			} else if(arr[i] == "/"){
				if(str < 0){
					str *= -1;
					str = Math.floor(str / num[i + 1]) * -1;
				} else{
					str = Math.floor(str / num[i + 1]);
				}
			}
		}
		
		result.push(str);
		return
	}
	
	for (let i = 0; i < usableOperator.length; i++) {
		if(visited[i]) continue;
		visited[i] = true;
		arr.push(usableOperator[i]);
		dfs(depth + 1);
		visited[i] = false;
		arr.pop()
	}

}

dfs(0);

const max = Math.max(...result);
const min = Math.min(...result);

console.log(`${max}\n${min}`)


