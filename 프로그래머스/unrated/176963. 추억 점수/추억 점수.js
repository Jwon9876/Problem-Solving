const solution = (name, yearning, photo) => {
    
    let scoreObj = {};
    let resultArr = [];
    
    name.reduce((a, v, i) => scoreObj[v] = yearning[i], {});
    
    for(const arr of photo){
        let sum = 0;
        for(const v of arr){
            sum += scoreObj[v] ?? 0;
        }
        resultArr.push(sum);
    }
        
    
    return resultArr;
}