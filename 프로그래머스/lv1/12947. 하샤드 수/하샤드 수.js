function solution(x) {
    var answer = true;
    var initNum = x
    var sum = 0;
    
    while(x > 0){
        sum += (x % 10)
        x /= 10
        x = Math.floor(x)
    }
    
    if((initNum % sum) !== 0){
        answer = false
    }
    
    return answer;
}