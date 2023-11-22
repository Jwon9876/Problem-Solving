const fs = require("fs");
const [n, str] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [len, step] = n.split(" ").map(Number);
const dp = [];

const arr = str.split(" ").map(Number);

dp.push([1, 1]);
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > step){
        const a = 1;
        const b = dp[i][0] + 1;
        dp.push([a, b])
    }
    else{
        const a = dp[i][0] + 1;
        const b = dp[i][1] + 1;
        dp.push([a, b])
    }
}

let max = -1;
dp.map((v) => {
    max = Math.max(Math.max(v[0], v[1]), max)
})
console.log(max)