function solution(babbling) {
    var answer = 0;
    
    for(const word of babbling){
        
        let accumlatedStr = "";
        let previousStr = "";
        
        for(const char of word){
            
            accumlatedStr += char;
            
            if(accumlatedStr !== previousStr && (accumlatedStr == "aya" || accumlatedStr == "ye" || accumlatedStr == "woo" || accumlatedStr == "ma")){
                previousStr = accumlatedStr;
                accumlatedStr = "";
            }
            
        }
        if(accumlatedStr == "") answer++;
        
    }
    
    return answer;
}