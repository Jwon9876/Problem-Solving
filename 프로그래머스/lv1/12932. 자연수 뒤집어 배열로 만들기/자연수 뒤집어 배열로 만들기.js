function solution(n) {
    var answer = [];
    
    while(n > 0){
        answer.push(n % 10)
        n /= 10
        n = Math.floor(n)
    }
    
    
    return answer;
}