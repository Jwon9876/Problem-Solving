function solution(arr1, arr2) {
    
    let answer = [];
    
    const arr1Width = arr1[0].length
    const arr1Height = arr1.length
    
    const arr2Width = arr2[0].length
    const arr2Height = arr2.length
    
    
    for(let i = 0; i < arr1Height; i++){
        let resultArr = [];
        
        for(let j = 0; j < arr2Width; j++){
            let result = 0;
            
            for(let k = 0; k < arr2Height; k++){
                result += arr1[i][k] * arr2[k][j];         
            }
            resultArr.push(result)
        }
        answer.push(resultArr)
    }  
    
    return answer;
}