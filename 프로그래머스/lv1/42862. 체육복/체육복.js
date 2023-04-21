const solution = (n, lost, reserve) => {
    
    lost = lost.sort((a, b) => a - b);
    reserve = reserve.sort((a, b) => a - b);

    const intersectionArr = lost.filter((v) => reserve.indexOf(v) !== -1);
    
    intersectionArr.map((v) => {
        reserve.splice(reserve.indexOf(v), 1);
        lost.splice(lost.indexOf(v), 1);
    })
    
    for(const value of reserve){
        const previousArrIndex = lost.indexOf(value - 1);
        const nextArrIndex = lost.indexOf(value + 1);
        
        if(previousArrIndex !== -1) lost.splice(previousArrIndex, 1);
        else if(nextArrIndex !== -1) lost.splice(nextArrIndex, 1);
    }
    
    return n - lost.length;
    
}