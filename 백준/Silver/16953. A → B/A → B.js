const fs = require("fs");
const [a, b] = fs.readFileSync("dev/stdin").toString().trim().split(" ");

const target = +a;
let n = +b;

const solution = (n) => {

    let count = 1;

    while(n > target){
        if(n % 2 == 0){
            count++;
            n /= 2;
        } else if(n % 10 == 1){
            n /= 10;
            n = parseInt(n);
            count++;
        } else{
            break;
        }

    }

    if(n == target) return count
    return -1;

}

const answer = solution(n)
console.log(answer)



