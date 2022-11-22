function solution(a, b) {
    var answer = 0;
    
    var startPoint = (a >= b) ? (b) : (a)
    var endPoint =  (a >= b) ? (a) : (b)
    
    for(let i = startPoint; i <= endPoint; i++){
        answer += i
    }
    
    
    return answer;
}