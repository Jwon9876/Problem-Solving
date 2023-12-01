const fs = require("fs")
const [a, b] = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const n = +a;
const arr = b.split(" ").map(Number);

const count = new Array(1000001).fill(0);
let result = 0;

arr.forEach((v, i) => {
    if(count[v] > 0){
        count[v]--;
        count[v - 1]++;
    } else{
        count[v - 1]++;
        result++;
    }
})

console.log(result)