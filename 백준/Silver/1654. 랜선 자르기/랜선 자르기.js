const fs = require("fs");
const [n, ...str] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [len, count] = n.split(" ").map(Number);
const arr = str.map(Number)

let start = 0;
let end = Math.max(...arr);

while(start <= end){

    let sum = 0;
    let mid = (start + end) / 2;
    mid  = Math.floor(mid)

    arr.forEach(v => {
        sum += Math.floor(v / mid)
    })

    if(sum >= count){
        start = mid + 1
    } else{
        end  = mid - 1
    }
}
console.log(end)