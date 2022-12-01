function solution(d, budget) {
    var answer = 0;
    d.sort( (a, b) => (a - b))
    
    
    let i;
    for(i = 0; i < d.length; i++){
        if(answer + d[i] <= budget){
            answer += d[i]
        }
        else break
    }
    console.log(i)
    
    
    
    return i;
}