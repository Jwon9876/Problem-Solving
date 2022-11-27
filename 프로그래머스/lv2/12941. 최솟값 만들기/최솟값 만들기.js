function solution(A,B){
    var answer = 0;    
    
    A.sort((a, b) => {
        return (a >= b) ? (1) : (-1)
    })
    
    B.sort((a, b) => {
        return (a >= b) ? (1) : (-1)
    }).reverse()
    
    for(let i = 0; i < A.length; i++){
        answer += (A[i] * B[i])
    }
    
    // console.log(A, B);
    console.log(answer);
    
    return answer;
}