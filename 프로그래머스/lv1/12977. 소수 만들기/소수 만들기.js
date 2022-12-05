function solution(nums) {
    
    let count = 0;
    let primeNumArr = new Array(3001).fill(true)
    
    for(let i = 2; i * i < primeNumArr.length; i++){    
        if(!primeNumArr[i]) continue;
        
        for(let j = i + i; j < primeNumArr.length; j += i){
            primeNumArr[j] = false
        }
    }
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                
                const sum = nums[i] + nums[j] + nums[k];
                if(primeNumArr[sum]) count++;
        
            }
        }
    }
    
    
    return count;
}