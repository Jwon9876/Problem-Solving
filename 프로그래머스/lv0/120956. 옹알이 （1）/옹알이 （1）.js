function solution(babbling) {
    
    let answer = 0;
    
    const enableArr = ["aya", "ye", "woo", "ma"];
    
    babbling = babbling.map(v => v.replace("aya", "*"))
    babbling = babbling.map(v => v.replace("ye", "*"))
    babbling = babbling.map(v => v.replace("woo", "*"))
    babbling = babbling.map(v => v.replace("ma", "*"))
    
    const regexr = /^\**\*$/g
    // const regexr = / [^a-z]/g  
    


    for(const value of babbling){        
        if(value.match(regexr)){
            answer++;
        }
    }
    
    return answer;
}