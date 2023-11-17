const fs = require("fs");
const [n, str]= fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answerArr = str.split(" ").map(v => parseInt(v));

const arr = new Array(parseInt(n)).fill(0).map((v, i) => i + 1);
const getRange = (n) => Math.floor(Math.sqrt(parseInt(n)));
const resultArr = [];
const range = getRange(n);

const shuffle = (arr, index) => {
    if(index == 0) return arr;

    const start = arr.slice(arr.length - index);
    return shuffle(start, Math.floor(index / 2)).concat(arr.slice(0, arr.length - index));

}

for (let i = 1; i <= range; i++) {
    for (let j = 1; j <= range ; j++) {
        const res = shuffle(shuffle(arr, Math.pow(2, i)), Math.pow(2, j))
        if(res.join("") == answerArr.join("")) {
            console.log(i, j);
            return;
        }
    }

}

