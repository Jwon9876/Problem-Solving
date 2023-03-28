const getNumberOfDivisors = (number) => {
    
    // exmaple
    // number 16
    // 1 * 16 / 16 * 2 -> pair => +2
    // 4 * 4 -> not pair -> + 1

    let count = 0;
    
    for(let i = 1; i * i <= number; i++){
        
        if (i * i == number) {
            count++;
        } else if (number % i == 0) {
            count += 2;
        }
    }
    
    return count;
    
}

const solution = (number, limit, power) => {
    let countArrOfDivisors = [];
    
    for(let i = 1; i <= number; i++){
        const count = getNumberOfDivisors(i);
        countArrOfDivisors.push(count);        
    }
        
    const sum = countArrOfDivisors.reduce((a, v) => (v > limit) ? (a + power) : (a + v), 0);
    
    return sum;
}