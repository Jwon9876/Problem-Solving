function solution(n) {
    var answer = 0;
    
    var arr = [];
    
    while(n > 0){
        arr.push(n % 3)
        n /= 3
        n = Math.floor(n)
    }
    
    for(let i = arr.length - 1; i >= 0; i--){
        answer = answer + arr[i] * 3 ** (arr.length - (i + 1))
    }
    
    return answer
}