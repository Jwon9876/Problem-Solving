const getTableKeyMinIndex = (keymap) => {
    const tableKeyMinIndex = {}; 
    keymap.map((v) => {
        const arrKey = v.split("");
        arrKey.map((keyValue, index) => {
               tableKeyMinIndex[keyValue] = Math.min(tableKeyMinIndex[keyValue] || index + 1, index + 1) 
            
        })
    })
    
    return tableKeyMinIndex;
}

const solution = (keymap, targets) => {
    const tableKeyMinIndex = getTableKeyMinIndex(keymap);
    const result = [];
    
    for(const target of targets){
        const sum = target.split("").reduce((a, v, i) => a + tableKeyMinIndex[v], 0)
        
        if(sum > 0) result.push(sum);
        else result.push(-1);
        
    }
    
    return result
    
}