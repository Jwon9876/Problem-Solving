const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const temp = b.map(v => v.split(" ").map(Number));

const visited = new Array(n).fill(0);

const sour = [];
const bitter = [];

temp.forEach((v, i) => {
	sour.push(v[0]);
	bitter.push(v[1]);
})

const arr = [];

let minValue = Infinity;

const dfs = (start) => {
	
	if(arr.length){
		
		let sourTotal = 1;
		let bitterTotal = 0;
		
		for (let i = 0; i < arr.length; i++) {
			sourTotal *= sour[arr[i]];
			bitterTotal += bitter[arr[i]];
		}
		
		const diff = Math.abs(sourTotal - bitterTotal);
		minValue = Math.min(minValue, diff);
		
	}
	
	for(let i = start; i < n; i++){
		if(visited[i]) continue;
		
		visited[i] = true;
		arr.push(i);
		
		dfs(start + 1);
		
		visited[i] = false;
		arr.pop();
	}
	
}

dfs(0);

console.log(minValue);
