function solution(answers) {
    
    // 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5
    // 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5
    // 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
    
    
    var answer = [];
    
    const firstPattern = [1, 2, 3, 4, 5];
    const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    
    let scoreArr = [0, 0, 0];
    let max = -1;
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] == firstPattern[i % firstPattern.length]){
            scoreArr[0]++;
        }
        
        if(answers[i] == secondPattern[i % secondPattern.length]){
            scoreArr[1]++;
        }
        
        if(answers[i] == thirdPattern[i % thirdPattern.length]){
            scoreArr[2]++;
        }
    }
    
    
    
    for(let i = 0; i < scoreArr.length; i++){
        if(scoreArr[i] > max){
            max = scoreArr[i];
        }
    }
    
    for(let i = 0; i < scoreArr.length; i++){
        if(scoreArr[i] ==  max){
            answer.push(i + 1)
        }
    }
    
    
    
    return answer;
}