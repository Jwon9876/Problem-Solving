const fs = require("fs");
const str = fs.readFileSync("dev/stdin").toString().trim();

const n = +str

const solution = (n) => {

    let count = 0;

    while (n >= 0){
        if(n % 5 == 0){
            count += Math.floor(n / 5);
            n %= 5;
            break
        };
        n -= 3;
        count += 1;
    }

    if(n == 0) return count;
    else return -1;
}

const answer = solution(n);

console.log(answer)