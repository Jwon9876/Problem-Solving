const solution = (a, b) => {
    
    a.sort((f, s) => s - f);
    b.sort((f, s) => s - f);
    
    let indexB = 0;
    
    for(let i = 0; i < a.length; i++){
        if(a.at(i) < b.at(indexB)){
            indexB++;
        }
    }
    
    return indexB;
    
}