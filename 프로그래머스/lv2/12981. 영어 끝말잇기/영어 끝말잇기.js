function solution(n, words) {
    
    let saidWords = [];
    saidWords.push(words[0])
    
    let id;
    let num;
    
    for(let i = 1; i < words.length; i += 1){
        
        id = Math.floor(i % n) + 1
        num = Math.floor(i / n) + 1
        
        if ((saidWords.includes(words[i])) || ((saidWords[i - 1][saidWords[i - 1].length - 1] !== words[i][0]))) {
            return [id, num]
        } 
        
        saidWords.push(words[i])
        
    }

    return [0, 0];
}