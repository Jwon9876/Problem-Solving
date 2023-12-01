const fs = require("fs")
const [a, ...b] = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const n = +a;
const arr = b.map(v => v.split(" ").map(Number))

const dp = [0, 1];

for (let i = 2; i < 45 ; i++) {
    dp.push(dp[i - 1] + dp[i - 2])
}

const answer = [];

const solution = (v) => {

    const temp = [];

    for (let i = dp.length; i >= 1; i--) {
        if(dp[i] <= v){
            v -= dp[i];
            temp.push(dp[i])
        }

    }

    answer.push(temp.reverse());
}



arr.map(v => solution(v))

console.log(answer.map(v => v.join(" ")).join("\n"))