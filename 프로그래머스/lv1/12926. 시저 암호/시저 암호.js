function solution(s, n) {
    var answer = '';
    
    
    
    for(let i = 0; i < s.length; i++){

        if((65 <= s[i].charCodeAt()) && (s[i].charCodeAt() <= 90))
        {
            ((s[i].charCodeAt() + n) > 90) ? (answer += String.fromCharCode((s[i].charCodeAt() + n) - 26)) : (answer += String.fromCharCode((s[i].charCodeAt() + n)))
        } else if((97 <= s[i].charCodeAt()) && (s[i].charCodeAt() <= 122)){
            ((s[i].charCodeAt() + n) > 122) ? (answer += String.fromCharCode((s[i].charCodeAt() + n) - 26)) : (answer += String.fromCharCode((s[i].charCodeAt() + n)))
        } else{
            answer += s[i]
        }
    }
    
    return answer;
}