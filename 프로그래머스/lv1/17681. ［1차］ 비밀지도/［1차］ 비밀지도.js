function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        answer.push((arr1[i] | arr2[i]).toString(2).padStart(n, 0))
    }
    
    console.log(answer)
    
    for(let j = 0; j < answer.length; j++){
        console.log(answer[j].replaceAll("1", "#"))
        answer[j] = answer[j].replaceAll("1", "#")
        answer[j] = answer[j].replaceAll("0", " ")
    }
    
    return answer;
}