function solution(a, b) {
    var answer = 0;
    
    
    var arr = []
    for(let id = 0; id < a.length; id++){
        arr[id] = a[id] * b[id];
    }
    
    answer = arr.reduce((a, v) => a + v)
    return answer;
}