function solution(n) {
    
    let answer = n + 1;
    const sumOne = n.toString(2).replaceAll("0", "").length
    
    while(true){
        if((answer).toString(2).replaceAll("0", "").length == sumOne) break;
        else answer++
    }
    return answer;
}