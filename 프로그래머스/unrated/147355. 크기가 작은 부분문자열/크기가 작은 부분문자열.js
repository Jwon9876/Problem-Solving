function solution(t, p) {
    var answer = 0;
    
    
    let toIntP = +p    
    
    let index = 0;
    
    while(index + p.length <= t.length){
        let slicedT = t.slice(index, index + p.length)
        let toIntSlicedT = +slicedT
        if(toIntSlicedT <= toIntP){
            answer++;
        }
        index++;
    }
    
    
    
    return answer;
}