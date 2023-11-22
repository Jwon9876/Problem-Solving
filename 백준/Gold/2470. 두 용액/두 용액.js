const fs = require("fs")
const [n, str] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const arr = str.split(" ").map(Number).sort((a, b) => a - b);

let left = 0;
let right = arr.length - 1
let min = Infinity

const answer = [];

while (left < right){
    const sum = arr[left] + arr[right];

    // 절대값을 비교해서 더 작은수로 찾으면, 0에서 더 가까운 수를 찾을 수 있다.
    if (min > Math.abs(sum)){
        answer[0] = arr[left];
        answer[1] = arr[right];
        min = Math.abs(sum);
    }

    if(sum < 0) left++;
    else if(sum == 0){
        break;
    }
    else right--;
}

/*
* 합계가 0보다 작으면 left값을 증가시켜
* 합계가 커지게 동작
*
* 합계가 0보다 크면 right를 감소시켜
* 합계가 작아지게 동작
* */

console.log(answer.join(" "))