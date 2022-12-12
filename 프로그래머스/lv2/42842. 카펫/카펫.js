function solution(brown, yellow) {
    var answer = [];
    
    // console.log(brown, yellow)
    
    // yellow의 갯수 = p
    // (x - 2) * (y - 2) = p
    // 6 * 4 = 24
    
    // brwon의 갯수 = q
    // 2x + 2y - 4 = q
    // 2x = q - 2y + 4
    // x = q/2 - y + 2
    // 8 * 2 + 6 * 2 - 4 = 24
    

    let i;
    
    for(i = 1; i <= 2000000; i++){
        if((((brown / 2) - i) * (i - 2) - yellow) == 0){
            break;
        }
    }
    
    
    
    return [(brown / 2) - i + 2, i];
}