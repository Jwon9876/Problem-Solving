function solution(n) {
    var answer = '';
    
    for(let id = 1; id <= n; id++){
        if(id % 2 == 1){
            answer += "수"
        } else{
            answer += "박"
        }
    }
    return answer;
}