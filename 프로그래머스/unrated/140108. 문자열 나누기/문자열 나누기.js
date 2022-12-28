function solution(s) {
    var answer = 0;
    
    
    let flag = false
    
    let firstChar = ""
    let firstCharCount = 0;
    let otherCharCount = 0;
    
    
    for(let i = 0; i < s.length; i++){
        
        if(firstCharCount !== 0 && firstCharCount == otherCharCount){
            answer++;
            firstCharCount = 0;
            otherCharCount = 0;
        }
        
        if(firstCharCount == 0){
            firstChar = s[i]
            firstCharCount++;
        }
        
        else{
            
            if(s[i] == firstChar){
                firstCharCount++
            } else{
                otherCharCount++
            }
        }
        
    }
    answer++
    
    
    return answer;
}