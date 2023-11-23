const fs = require("fs");
const [day, ...str] = fs.readFileSync("dev/stdin").toString().trim().split("\n");


const t = [0];
const p = [0];
str.map(v => v.split(" ")).map(s => {
    t.push(+s[0])
    p.push(+s[1])
});


let dp = new Array(+day + 2).fill(0);
let max = 0;

for (let i = 1; i <= +day; i++) {
    max = Math.max(max, dp[i]);

    if(i + t[i] <= +day + 1){
        dp[i + t[i]] = Math.max(max + p[i], dp[i + t[i]])
    }

}

console.log(Math.max(...dp))

