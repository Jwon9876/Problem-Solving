function solution(s) {
    var answer = '';
    
    
    answer = s.split(" ");
    answer.sort((a, b) => (a - b))
    
    return `${answer[0]  + " " + answer[answer.length - 1]}`;
}