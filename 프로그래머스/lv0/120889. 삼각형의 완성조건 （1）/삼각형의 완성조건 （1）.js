function solution(sides) {
    
    let sortedSides = sides.sort((a, b) => a - b);
    
    const maxSide = sortedSides[sortedSides.length - 1];
    const otherSides = sortedSides[0] + sortedSides[1]
    
    if(maxSide < otherSides) return 1;
    
    return 2;
}