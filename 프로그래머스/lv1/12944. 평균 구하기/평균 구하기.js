function solution(arr) {
    var answer = 0;
    
    
    
    var sum = arr.reduce((a, v) => (a + v))
    console.log(sum / arr.length)
    
    answer = sum / arr.length
    
    return answer;
}