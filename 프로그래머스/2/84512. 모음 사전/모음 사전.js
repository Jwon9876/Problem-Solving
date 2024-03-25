const aeiou = ['A', 'E', 'I', 'O', 'U'];
const arr = [];
let flag = false;
let count = 0;
let result = 0;

const dfs = (temp, word) => {
	
	if(temp.length > aeiou.length){
		return
	}
	
	if(temp.join("") == word && !flag){
		flag = true;
		result = count;
		return;
	}
	
	count++;
	
	for (let i = 0; i < aeiou.length; i++) {
		arr.push(aeiou[i]);
		dfs(arr, word);
		arr.pop()
	}
	
}


const solution = (word) => {
	
    dfs(arr, word);
	return result;
	
}