const solution = (topping) => {
    
    const leftSet = new Set();
    const rightSet = new Set();
    
    const leftArr = [];
    const rightArr = [];
    
    topping.forEach((v, i) => {
        leftSet.add(topping.at(i));
        leftArr.push(leftSet.size);
        
        rightSet.add(topping.at(-i - 1));
        rightArr.push(rightSet.size)
    })
    
    let count = 0;
    
    rightArr.reverse();
    
    for(let i = 0; i < topping.length - 1; i++){
        if(leftArr[i] == rightArr[i + 1]) count++;
    }
    
    return count;
    
}