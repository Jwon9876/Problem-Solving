const fs = require("fs")
const [n, ...strArr] = fs.readFileSync("Problem7.txt").toString().trim().split("\n");

const count = parseInt(n)

const sortedArr = strArr.sort((a, b) => {
	if (a.length == b.length){
		if (a < b) return -1;
		else return 1
	}
	return a.length - b.length
})

const set = new Set(sortedArr)

for (const v of set) {
	console.log(v)
}
