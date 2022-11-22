function solution(numbers) {
    
    var answer = 0;
    
    var mark = []
    
    for(let id = 0; id < 10; id++){
        mark[id] = id
    }
    
    console.log(mark)
    
    for(let id = 0; id < numbers.length; id++){
        mark[numbers[id]] = 0
    }
    
    
    answer = mark.filter(v => v !== 0).reduce((a, v) => (a + v))
    
    
    return answer;
}