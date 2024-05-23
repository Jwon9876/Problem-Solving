const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m] = a.split(" ").map(Number);
const board = b.map(v => v.split(" ").map(Number));

const arrHomePos = [];
const arrDeliveryPos = [];
const arrSelectedDeliveryPos = [];

board.forEach((r, ri) => {
	r.forEach((c, ci) => {
		if (c == 1) arrHomePos.push([ri + 1, ci + 1])
		if (c == 2) arrDeliveryPos.push([ri + 1, ci + 1])
	})
})

const visited = new Array(arrDeliveryPos.length).fill(false);
const arrDistance = new Array(arrHomePos.length).fill(0);

let sum = 1e+9;

const dfs = (start, depth) => {
	if (depth == m) {
		
		arrHomePos.forEach((h, hi) => {
			const [x1, y1] = h;
			
			arrSelectedDeliveryPos.forEach((sd, sdi) => {
				
				const [x2, y2] = sd;
				
				const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
				
				if (arrDistance[hi] == 0) {
					arrDistance[hi] = distance
				} else {
					arrDistance[hi] = Math.min(arrDistance[hi], distance);
				}
			})
			
		})
		
		sum = Math.min(sum, arrDistance.reduce((a, v) => a + v, 0));
		arrDistance.fill(0);
		return;
	}
	
	for (let i = start; i < arrDeliveryPos.length; i++) {
		if (visited[i]) continue;
		visited[i] = true;
		arrSelectedDeliveryPos.push(arrDeliveryPos[i]);
		dfs(i + 1, depth + 1);
		arrSelectedDeliveryPos.pop();
		visited[i] = false;
	}
}

dfs(0, 0);

console.log(sum)


