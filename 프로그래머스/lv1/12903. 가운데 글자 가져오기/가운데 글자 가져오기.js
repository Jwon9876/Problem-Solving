function solution(s) {
    var answer = '';
    
    if(s.length % 2 == 1) answer = s[Math.floor(s.length/2)]
    else answer = s.slice(Math.floor(s.length/2) - 1, Math.floor(s.length/2) + 1)
    return answer;
}