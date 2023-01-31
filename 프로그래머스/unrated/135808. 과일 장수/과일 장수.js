function solution(k, m, score) {
    let answer = 0;
    
    score = score.sort((a, b) => b - a);
    
    for(let i = 0; i <= score.length - m; i += m){
        answer += score[i + m - 1] * m;
    }
    
    return answer;
}
