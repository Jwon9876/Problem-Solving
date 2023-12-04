const fs = require("fs")
const [n, k] = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

const sum = new Array(k + 1).fill(0).reduce((a, v, i) => a + i, 0);

if(sum > n){
    console.log(-1);
    return;
}

if((n - sum) % k == 0){
    console.log(k - 1);
    return;
}

console.log(k)