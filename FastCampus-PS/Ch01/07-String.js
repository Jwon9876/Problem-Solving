const fs = require("fs");
// const input = fs.readFileSync('07-String-01.txt').toString().split('\n');
const input = fs.readFileSync('07-String-02.txt').toString().split('\n');

// const isCheckerWord = (word) => {
// 	const set = new Set();
// 	set.add(word[0]);
// 	for (let i = 1; i < word.length; i++) {
// 		if(word[i - 1] !== word[i] && set.has(word[i]))
// 			return false
// 		if(word[i - 1] !== word[i] && !set.has(word[i]))
// 			set.add(word[i]);
//
// 	}
// 	return true
// }
//
//
// let isCheckerWordCount = 0;
// for (let i = 1; i < input.length - 1; i++) {
// 	if(isCheckerWord(input[i])) isCheckerWordCount++;
// }
// console.log(isCheckerWordCount)

const splitStr = input[0].trim().split(" ");
if(splitStr === ""){
	console.log(0)
} else{
	console.log(input[0].trim().split(" ").length)
}
