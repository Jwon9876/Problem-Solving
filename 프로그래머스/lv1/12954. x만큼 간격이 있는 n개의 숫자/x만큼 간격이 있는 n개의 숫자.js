function solution(x, n) {
    
    // x 시작하는 수
    // n 증가 횟수
    var answer = [];
    if(x > 0){
        for(let i = 1; i <= n; i++){
            answer.push(x * i)
        }
    } 
    else{
        for(let i = n; i >= 1; i--){
            answer.push(x * i)
        }
        answer.reverse()
    }

    
    return answer;
}