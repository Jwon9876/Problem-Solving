const [n, ...str] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const count = +n;
const strArr = str.map(v => v.trim())
const answerArr = [];

const isPalindrome = (str) => {
    return str == str.split("").reverse().join("")
}


const solution = (str) => {

    const palindrome = isPalindrome(str);
    if(palindrome) return 0;

    const length = str.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if(str[i] !== str[length - i - 1]){
            const first = str.slice(0, i) + str.slice(i + 1);
            const second = str.slice(0, length - i - 1) + str.slice(length - i);
            const check = isPalindrome(first) || isPalindrome(second)
            if (check) return 1;
            return 2;
        }
    }

}

strArr.forEach((v) => {
    const answer = solution(v);
    answerArr.push(answer);
})

console.log(answerArr.join("\n"))