function isPrime(num){
    
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) return false;
    }
    
    return true;
}



function solution(n, k) {
    var answer = 0;
    
    let convertedRadixArr = n.toString(k).split("0").filter(v => v !== "" && v !== "1");
    
    convertedRadixArr.map((v) => {
        if(isPrime(v)) answer++;
    })
    
    return answer;
}