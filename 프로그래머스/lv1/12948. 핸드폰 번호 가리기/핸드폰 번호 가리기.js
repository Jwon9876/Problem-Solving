function solution(phone_number) {
    var answer = '';
    
    var front = phone_number.slice(0, phone_number.length - 4)
    var back = phone_number.slice(phone_number.length - 4)
    
    
    for(let i = 0; i < front.length; i++){
        answer += "*"
    }
    
    answer += back

    return answer;
    
    
    
    
}