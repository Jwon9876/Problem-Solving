function solution(k, m, score) {
    var answer = 0;
    
    // k: 최대 점수
    // m: 한 상자에 들어가는 사과의 수
    // score: 사과 점수
    
    score = score.sort((a, b) => b - a);
        
    // 팔 수 있는 상자의 갯수 -> score.length / m
    
    // console.log(Math.floor(score.length / m));
    
    const sellableBoxes = Math.floor(score.length / m);
    
    // console.log(score)
    
    for(let i = 0; i <= score.length - m; i += m){
        // console.log(score[i + m - 1] * m)
        answer += score[i + m - 1] * m;
    }
    
    
    
    
    
    return answer;
}