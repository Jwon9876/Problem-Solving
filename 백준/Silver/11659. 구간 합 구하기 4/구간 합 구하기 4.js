const fs = require("fs")
const [n, str, ...range] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const arr = str.split(" ").map(Number);
const rangeArr = range.map(v => v.split(" ").map(Number));

const answer = [];

let dp = new Array(arr.length + 1).fill(0);

// dp[y] - (dp[x - 1]);

arr.forEach((v, i) => {
    dp[i + 1] = dp[i] + v;
})

rangeArr.forEach((v, i) => {
    answer.push(dp[v[1]] - dp[v[0] - 1])

})


console.log(answer.join("\n"))

