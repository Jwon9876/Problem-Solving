const fs = require("fs");
const [n, str] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const len = +n;
const arr = str.split(" ").map(Number);

let dp = new Array(arr.length).fill(1);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        if(arr[i] > arr[j]){
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
}

console.log(Math.max(...dp))