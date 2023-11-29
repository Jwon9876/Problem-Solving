const fs = require("fs");
const str = fs.readFileSync("dev/stdin").toString().trim();

const target = +str;

let cur = 0;
let n = 0;

while(target >= n){
    cur += 1;
    n += cur;
}
console.log(cur - 1)