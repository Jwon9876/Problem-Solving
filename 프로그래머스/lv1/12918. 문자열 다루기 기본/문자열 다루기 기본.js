function solution(s) {
    var answer = false;
    
    
    const regex = /[A-Z]/g;
    var convertedS = s.toUpperCase().replaceAll(regex, "")
    
    // if(convertedS.length == 0) answer = false
    if((s.length == 4 || s.length == 6) && s.length == convertedS.length) answer = true
    
    
    return answer;
}