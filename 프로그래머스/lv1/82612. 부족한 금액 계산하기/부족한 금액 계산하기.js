function solution(price, money, count) {
    var answer = -1;
    
    var arr = new Array(count).fill(price)
    answer = arr.reduce((a, v, i) => (a + v * (i + 1)))
    if(answer > money) answer -= money
    else answer = 0
    
    return answer;
}