function solution(n, s) {

    if(s < n) return [-1];
    
    let remainder = Math.floor(s % n);
    const quotient = Math.floor(s / n);
    
    const setOfBest = new Array(n)
        .fill(quotient)
        .map((v) => {
            if(remainder > 0){
                remainder--;
                return v += 1;
            }
            return v;
        })
        .sort((a, b) => a - b);
    
    return setOfBest;
}