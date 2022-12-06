function solution(n, words) {
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    // 1. 끝말이 이어지지 않는 경우
    // 2. 이미 말한 단어인 경우
    
    // console.log(n, words.length)
    
    
    let saidWords = [];
    saidWords.push(words[0])
    
    let id;
    let num;
    
    for(let i = 1; i < words.length; i += 1){
        // console.log(words[i].length)
        
        id = Math.floor(i % n) + 1
        num = Math.floor(i / n) + 1
        
        if ( (saidWords.includes(words[i])) || ((saidWords[i - 1][saidWords[i - 1].length - 1] !== words[i][0])) ) {
            console.log("includes", words[i])
            console.log(id, num)
            return [id, num]
        } else{
            saidWords.push(words[i])
        }
        
    }
    
    // answer.push(id, num)
    return [0, 0];
}