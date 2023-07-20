const solution = (dots) => {    
    const sortedDots = dots.sort();
    
    console.log(sortedDots[0], sortedDots[1], sortedDots[2])
    
    const width = Math.abs(sortedDots[0][1] - sortedDots[1][1])
    const height = Math.abs(sortedDots[0][0] - sortedDots[2][0])
    
    return width * height
    
}