const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const splitStr = input[0].trim().split(" ");
if(splitStr == ""){
	console.log(0)
} else{
	console.log(input[0].trim().split(" ").length)
}

