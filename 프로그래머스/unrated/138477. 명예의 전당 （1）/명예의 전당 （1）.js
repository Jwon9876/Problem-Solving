function solution(k, score) {
    var answer = [];
    
    var ScoreArr = [];
    
    for(let i = 0; i < score.length; i++){
        ScoreArr.push(score[i])
        ScoreArr.sort((a, b) => (b - a))
        let kScoreArr = ScoreArr.slice(0, k);
        kScoreArr.reverse();
        answer.push(kScoreArr[0])
    }
    
    return answer;
}