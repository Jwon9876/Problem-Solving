function solution(numbers) {
    
    /* Example 1
    [6, 10, 2]
    6 10 2
        610 106 -> 6 10 2
        62 26 -> 6 10 2
        102 201 -> 6 2 10
    */
    
    const answer = numbers.sort((a, b) => {
        a = a.toString();
        b = b.toString();
        
        return (b + a) - (a + b)
    
    }).join("");
    
    return (answer.replaceAll("0", "").length) ? (answer) : ("0");
    
}