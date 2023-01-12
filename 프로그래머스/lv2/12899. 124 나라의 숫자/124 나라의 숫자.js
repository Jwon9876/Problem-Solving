function solution(n) {
    
    let answerArr = [];
    
    const number124 = [1, 2, 4];
    
    while(n > 0){
        
        if(!(n % 3)) {
            answerArr.push(number124[2])
            n = Math.floor(n / 3)
            n -= 1;
        }
        else {
            answerArr.push(number124[(n % 3) - 1])
            n = Math.floor(n / 3)
        }
        
        
    }
    
    return answerArr.reverse().join("");
}