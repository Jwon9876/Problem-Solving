function solution(num) {
    var answer = '';
    
    num = (num > 0) ? (num) : (num * -1)
    
    if (num == 0){
        answer = "Even"
    } else if((num % 2) == 1){
        answer = "Odd"
    } else{
        answer = "Even"
    }
    
    
    return answer;
    
}