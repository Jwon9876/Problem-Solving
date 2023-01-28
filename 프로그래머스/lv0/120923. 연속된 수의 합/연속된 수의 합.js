function arrElementSum(arr){
    const sum = arr.reduce((a, v) => a + v, 0);
    
    return sum;
}

function arrElementMinus(arr){
    let result = arr.map((v, i) => v = v - 1);
    
    return result;
}

function arrElementAdd(arr){
    let result = arr.map((v, i) => v = v + 1);
    
    return result;
}

function solution(num, total) {
    
    // console.log(num, total);
    
    let result = new Array(num).fill(0).map((v, i) => v = i + 1);
    
    // console.log(result)
    
    while(true){
        let sum = arrElementSum(result);
        if(sum == total){
            return result;
        } else if(sum > total){
            result = arrElementMinus(result);
        } else{
            result = arrElementAdd(result);
        } 
        
    }
    // console.log(sum)
    
    return [];
}