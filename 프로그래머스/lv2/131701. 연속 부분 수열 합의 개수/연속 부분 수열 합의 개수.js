function solution(elements) {
    var answer = 0;
    
    const sequenceArr = [...elements, ...elements];
    
    let sequenceSumSet = new Set();
    
    let range = 0;
    
    while(range < elements.length){
        for(let i = 0; i < elements.length; i++){
            let sequenceSum = sequenceArr.slice(i, i + range + 1).reduce((a, v) => a + v)
            sequenceSumSet.add(sequenceSum)
        }
        
        range++;
    }
    
    // console.log(sequenceSumSet.size)
    return sequenceSumSet.size;
}