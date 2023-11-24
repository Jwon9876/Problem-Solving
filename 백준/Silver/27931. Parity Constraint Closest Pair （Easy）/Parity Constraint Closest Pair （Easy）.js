const fs = require("fs");
const [n, str] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const len = +n;
const point = str.split(" ").map(Number).sort((a, b) => a - b);

let minEven = 2e9 + 1;
let minOdd = 2e9 + 1;

for (let i = 0; i < point.length - 1; i++) {
    for (let j = i + 1; j < i + 3; j++) {
        const dist = Math.abs(point[j] - point[i]);
        if(dist % 2 && minOdd > dist){
            minOdd = dist;
        } else if(!(dist % 2) && minEven > dist){
            minEven = dist
        }
    }
}

if(minEven == 2e9 + 1){
    minEven = -1
}
if(minOdd == 2e9 + 1){
    minOdd = -1
}
console.log(minEven, minOdd)

