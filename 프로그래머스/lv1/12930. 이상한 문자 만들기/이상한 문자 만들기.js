function solution(s) {
    var answer = '';
    
    var wordIndex = 0;
    
    for(let i = 0; i < s.length; i++){        
        if(s[i] == ' '){
            wordIndex = 0;
            answer += " ";
        } else{
            wordIndex++;            
            (wordIndex % 2 == 1) ? (answer += s[i].toUpperCase()) : (answer += s[i].toLowerCase());
        }
    }
    return answer;
}
