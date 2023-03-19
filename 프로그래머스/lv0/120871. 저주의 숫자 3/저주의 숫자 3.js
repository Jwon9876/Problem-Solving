function solution(n) {

    let currentNum = 1;
    let arr = [];
    let countObject = {};
    
    for(let i = 1; i <= 186; i++){
        if(i % 3 !== 0 && String(i).indexOf('3') == -1) {
            countObject[currentNum] = i;
            currentNum++;
        }
    }
    
    return countObject[n];
}