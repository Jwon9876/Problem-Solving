const solution = (t) => {
    
    const height = t.length - 1;
    
    // height
    for(let i = height; i >= 0; i--){
        // width
        for(let j = 0; j < t[i].length - 1; j++){
            const biggerOne = Math.max(t[i][j], t[i][j + 1])
            t[i - 1][j] += biggerOne;
        }
    }
    
    return t[0][0];
}