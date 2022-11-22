function solution(absolutes, signs) {
    var answer = 0;
    
    
    for(let id = 0; id < absolutes.length; id++){
        if(!signs[id]){
            answer -= absolutes[id]
        } else {
            answer += absolutes[id]
        }
    }
    
    return answer;
    
}