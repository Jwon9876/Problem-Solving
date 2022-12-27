function solution(s) {
    var answer = 0;
    
    
    
    for(let i = 0; i < s.length; i++){

        let flag = true;
        let slicedStr = s.slice(i) + s.slice(0, i);
        let ArrLikeStack = [];
        
        for(let j = 0; j < s.length; j++){
            
            if(j == 0 && (slicedStr[j] == ")" || slicedStr[j] == "]" || slicedStr[j] == "}")){
                flag = !flag
                break;
            }
            
            if(slicedStr[j] == "(" || slicedStr[j] == "[" || slicedStr[j] == "{"){
                ArrLikeStack.push(slicedStr[j])
                continue;
            }
            
            if(slicedStr[j] == ")" && ArrLikeStack[ArrLikeStack.length - 1] == "("){
                ArrLikeStack.pop()
            }
            
            else if(slicedStr[j] == "]" && ArrLikeStack[ArrLikeStack.length - 1] == "["){
                ArrLikeStack.pop()
            }
            
            else if(slicedStr[j] == "}" && ArrLikeStack[ArrLikeStack.length - 1] == "{"){
                ArrLikeStack.pop()
            }
        }
        
        if(!ArrLikeStack.length && flag) answer++;
    }
    
    
    
    
    
    
    
    
    return answer;
}