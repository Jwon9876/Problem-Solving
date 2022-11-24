function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j])
        }
    }
    
    
    var temp = answer.filter((v, i) => (answer.indexOf(v) === i))
    console.log(temp)
    temp.sort((a, b) => (a - b))
    return temp;
}