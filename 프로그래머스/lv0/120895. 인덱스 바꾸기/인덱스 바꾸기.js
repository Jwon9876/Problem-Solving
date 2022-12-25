function solution(my_string, num1, num2) {
    var answer = '';
    
    const firstReplacement = my_string[num1]
    const secondReplacement = my_string[num2]
    
    for(let i = 0; i < my_string.length; i++){
        if(i == num1){
            answer += secondReplacement
        } else if(i == num2){
            answer += firstReplacement
        } else{
            answer += my_string[i]
        }
    }
        
    return answer;
}