function solution(s) {
    var answer = [];
    
    let position = {};
    
    for(let i = 0; i < s.length; i++){
        if(position[s[i]] == undefined){
            answer.push(-1);
        } else{
            answer.push(i - position[s[i]]);
        }
        position[s[i]] = i
        
    }
    
    
    
    
    
    return answer;
}