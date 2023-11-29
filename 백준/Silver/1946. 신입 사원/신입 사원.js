const fs = require("fs");
const [n, ...strArr] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const iter = +n;

for (let i = 0; i < iter; i++) {
    const range = +strArr.shift();
    const arr = strArr.splice(0, range).map(v => v.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);
    let count = 1;
    let min = arr[0][1]
    for (let j = 1; j < range; j++) {
        if(min > arr[j][1]){
            count++;
            min = arr[j][1];
        }
        
        if(min == 1) break;
    }
    console.log(count)
}