function solution(n) {
    var answer = 0;
    
    
    for(let i = 1; i <= n; i++){
        var sum = 0;
        for(let j = i; j <= n; j++){
            sum += j;
            if(sum == n){
                answer += 1
            } else if(sum > n){
                break;
            }
        }
    }
    
    
    return answer;
}