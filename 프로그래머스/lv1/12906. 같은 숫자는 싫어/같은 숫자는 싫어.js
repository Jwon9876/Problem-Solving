function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    
    for(let i = 0; i < arr.length; i++){
        if(answer.length == 0) {
            answer.push(arr[i]);
        }
        else if(answer[answer.length - 1] !== arr[i]){
            answer.push(arr[i])
        }
    }
    
    return answer;
}