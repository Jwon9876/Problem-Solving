function solution(x, y) {
    
    let xNumberCountArr = new Array(10).fill(0);
    let yNumberCountArr = new Array(10).fill(0);
    let answerArr = [];
    
    for(const value of x){
        xNumberCountArr[value]++;
    }
    
    for(const value of y){
        yNumberCountArr[value]++;
    }
    
    
    for(let i = 0; i < xNumberCountArr.length; i++){
        
        let minCount = Math.min(xNumberCountArr[i], yNumberCountArr[i]);
        
        for(let j = 0; j < minCount; j++){
            answerArr.push(i);
        }
    }
    
    if(!answerArr.length) return "-1";
    
    let answer = answerArr.sort((a, b) => b - a).join("");
    
    return (!answer.replaceAll("0", "").length) ? ("0") : (answer);
}