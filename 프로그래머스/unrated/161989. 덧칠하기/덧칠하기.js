const solution = (n, m, section) => {
    let nextStartPoint = 0;
    let count = 0;
    for(const v of section){
        if(v >= nextStartPoint){
            count++;
            nextStartPoint = v + m
        }
    }
    return count;
}