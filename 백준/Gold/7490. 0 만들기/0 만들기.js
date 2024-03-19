const [a, ...b] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +a;
const targetArr = b.map(Number);

const evalWithString = (string) => {
	return new Function('return ' + string)()
};


for (let i = 0; i < targetArr.length; i++) {
	const numArr = new Array(targetArr[i]).fill(0).reduce((a, v, i) => [...a, i + 1], []);
	
	const arr = [];
	const result = [];
	
	const dfs = (depth) => {
		
		if (depth == targetArr[i] - 1) {
			
			const temp = [];
			
			arr.forEach((v, i) => {
				if (i == arr.length - 1) {
					temp.push(numArr[i], arr[i], numArr[i + 1]);
					return;
				}
				temp.push(numArr[i], arr[i]);
			})
			
			const notReplacedStr = temp.join("")
			const str = notReplacedStr.replaceAll(" ", "");
			const isZero = evalWithString(str) == 0 ? true : false;
			if (isZero) result.push(notReplacedStr)
			return;
		}
		
		for (const e of [" ", "+", "-"]) {
			arr.push(e);
			dfs(depth + 1);
			arr.pop();
		}
	}
	
	dfs(0);
	console.log(result.join("\n"))
	console.log("")
}
