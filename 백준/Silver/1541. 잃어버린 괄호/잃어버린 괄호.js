const fs = require("fs");
const str = fs.readFileSync("dev/stdin").toString().trim();

const splitByMinus = str.split("-");

let answer = 0;

splitByMinus.forEach((v, i) => {
    let sum = v.split("+").map(Number).reduce((a, v) => a + v, 0);
    if(!i){
        answer += sum
    } else{
        answer -= sum
    }
})

console.log(answer)