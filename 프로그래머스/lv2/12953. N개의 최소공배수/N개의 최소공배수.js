function solution(arr) {
    var answer = 0;
    const maxValue = arr[0];
    arr.reverse()

    answer = maxValue;
    while(true){
        
        let sum = 0
        
        for(let i = 0; i < arr.length; i++){
            if(answer % arr[i] == 0){
                sum++;
            }
        }
        if(sum == arr.length){
            break;
        }
        answer++;
    }
    
    
    return answer;
}