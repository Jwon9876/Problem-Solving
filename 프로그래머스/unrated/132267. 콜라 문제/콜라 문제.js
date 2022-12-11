function solution(a, b, n) {
    var answer = 0;
    
    // a보다 작을때 까지 반복
    
    // n: 총 병의 갯수
    // a: 줘야하는 병의 개수
    // b: a 당 돌려받는 병의 갯수
    
    
    while(n >= a){
        
        let q = n % a
        n = Math.floor(n / a) * b
        
        answer += n
        
        n += q
        
        console.log(n, q, answer)
    }
    return answer;
}