const fs = require("fs")
const [a, ...b] = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const arr = b.map(v => v.split(" ").map(Number));

const sorted = arr.sort((a, b) => {
    if(a[1] == b[1]) return a[0] - b[0];
    return a[1] - b[1]
})
let max = sorted[0][1];
let count = 1;

for (let i = 1; i < sorted.length; i++) {
    if(max <= sorted[i][0]){
        max = sorted[i][1];
        count++;
    }
}
console.log(count)
