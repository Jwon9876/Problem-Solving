function gcd(a, b){
    var temp;
    
    while(b > 0){
        temp = a % b;
        a = b
        b = temp
    }
    return a
}

function lcm(a, b){
    return a * b / gcd(a, b)
}


function solution(n, m) {
    var answer = [];
    
    
    // a > b
    var a = (n >= m) ? (n) : (m);
    var b = (n >= m) ? (m) : (n);
    
    answer.push(gcd(n, m))
    answer.push(lcm(n, m))
    
    return answer;
}