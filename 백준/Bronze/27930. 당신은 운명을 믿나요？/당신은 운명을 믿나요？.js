const fs = require("fs");
const [str] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const KOREA = "KOREA"
const YONSEI = "YONSEI"
const arr = str.split("");

let koreaStr = "";
let yonseiStr = "";

let k = 0;
let y = 0;
let id = 0;

while (id < arr.length){

    if(arr[id] == KOREA[k]){
        koreaStr += arr[id];
        k++
    } 
    if(arr[id] == YONSEI[y]){
        yonseiStr += arr[id];
        y++
    }

    if(koreaStr == KOREA){
        console.log(KOREA);
        break;
    } else if(yonseiStr == YONSEI){
        console.log(YONSEI);
        break;
    }

    id++;
}