function solution(N, stages) {
    var answer = [];
        
    let userCount = stages.length;
    
    let eachStageFailureRateArr = []
    
    for(let i = 1; i <= N; i++){
        let eachStageFailureRate = stages.filter((v) => v == i);
        eachStageFailureRateArr.push([i, eachStageFailureRate.length / userCount])
        userCount -= eachStageFailureRate.length
    }

    
    eachStageFailureRateArr.sort((a, b) => {
        if(a[1] > b[1]) return -1;
        else return 1
    })
    
    
    answer = [...eachStageFailureRateArr].map((v) => v[0])
    
    return answer;
}