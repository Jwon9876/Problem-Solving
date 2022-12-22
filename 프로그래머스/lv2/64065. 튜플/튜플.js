function solution(s) {
    var countArr = new Array(100001).fill(0)
    
    s = s.replaceAll("{", "")
    s = s.replaceAll("}", "")
    s = s.split(",")
    

    for(let i = 0; i < s.length; i++){
        countArr[s[i]]++;
        s[i] = +s[i]
    }
    
    let set = new Set(s)
    let answerArr = [...set]

    answerArr.sort((a, b) => {
        if(countArr[a] >= countArr[b]) return -1
        else return 1
    })
    
    
    return answerArr;
}