function solution(arr) {
    var answer = [];
    
    const id = arr.indexOf(Math.min(...arr))
    arr.splice(id, 1)
    
    answer =  (arr.length == 0) ? ([-1]) : (arr)
    return answer;
}