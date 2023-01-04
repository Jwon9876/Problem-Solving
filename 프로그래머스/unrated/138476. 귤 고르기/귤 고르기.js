function solution(k, tangerine) {
    
    let tangerineCountObj = {};
    
    for(const key of tangerine){
        tangerineCountObj[key] = (tangerineCountObj[key] || 0) + 1;
    }
    
    let tangerineCountSortedArr = Object.values(tangerineCountObj).sort((a, b) => b - a);
    
    for(let i = 0; i < tangerineCountSortedArr.length; i++){
        k -= tangerineCountSortedArr[i];
        
        if(k <= 0) return i + 1;
    }    
    
}