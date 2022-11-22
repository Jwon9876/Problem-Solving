function solution(n) {
    var answer = 0;
    
    var sqrtNum = Math.sqrt(n)
    
    if((n % sqrtNum) == 0){
        answer = (sqrtNum + 1) ** 2
    } else{
        answer = -1
    }
    
    
    
    return answer;
}