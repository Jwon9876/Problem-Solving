// const fs = require("fs");
// const input = fs.readFileSync('06-Array-01.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const arr = input[1].split(" ").map(v => Number(v));

// const min = Math.min(...arr)
// const max = Math.max(...arr)

// const min = arr.reduce((a, b) => Math.min(a, b))
// const max = arr.reduce((a, b) => Math.max(a, b))

// console.log(min, max)


// ===

// const set = new Set();
// const numArr = new Array(10).fill(0).map((v, i)=> v + i + 1).map(v => set.add(v % 42));
// console.log(set.size)

// ===

const fs = require("fs");
const input = fs.readFileSync('06-Array-02.txt').toString().split('\n');

const testCases = input[0];
for (let i = 1; i <= testCases; i++) {
	let data = input[i].split(' ').map(Number);
	let n = data[0];
	let summary = 0;
	for (let i = 1; i <= n; i++) {
		summary += data[i];
	}
	let average = summary / n;
	let cnt = 0;
	for (let i = 1; i <= n; i++)
		if (data[i] > average) cnt += 1;
	console.log(`${(cnt / n * 100).toFixed(3)}%`);
}


// console.log(answerArr)
