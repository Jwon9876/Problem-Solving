function solution(n) {
    var answer = 0;
    
    n = n.toString()
    var sortedNumArr = []
    var sortedNum = 0
    
    for(let i = 0; i < n.length; i++){
        sortedNumArr.push(n[i])
    }
    
    sortedNumArr.sort().reverse()
    
    
    for(let i = 0; i < n.length; i++){
        if(i == 0){
            sortedNum += parseInt(sortedNumArr[i])
        } else{
            sortedNum *= 10
            sortedNum += parseInt(sortedNumArr[i])
        }
    }
    
    answer = sortedNum
    return answer;
}