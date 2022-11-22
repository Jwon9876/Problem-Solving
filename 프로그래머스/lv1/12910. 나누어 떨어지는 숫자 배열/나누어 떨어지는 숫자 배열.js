function solution(arr, divisor) {
    var answer = [];
    
    answer = arr.filter(v => v % divisor == 0)

    if(answer.length == 0) answer.push(-1)
    answer.sort((a, b) => (a - b))
    
    return answer;
}