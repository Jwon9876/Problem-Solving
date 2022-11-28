function solution(s){
    var answer = false;
    
    
    var openCount = 0;
    var closeCount = 0;
    
    if(s[0] == ')'){
        return false;
    } else{
        for(let i = 0; i < s.length; i++){
            (s[i] == '(') ? (openCount++) : (closeCount++)
            if(closeCount > openCount){
                return false;
            }
        } 
        return (openCount == closeCount) ? (true) : (false); 
    }
    

}