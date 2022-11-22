function solution(num) {
    var answer = -1;
    
    var count = 0;
    
    while(count < 500){
        if(num == 1){
            break;
        }
        
        else if((num % 2) == 0){
            num /= 2
        }
        
        else{
            num *= 3
            num += 1
        }
        
        count++
    }
    if(count !== 500){
        answer = count        
    }
    
    return answer;
}