function solution(clothes) {
    var answer = 1;
    
    let table = {};
    
    for(cloth of clothes){
        (
            !table[cloth[1]]
        ) ? (
            table[cloth[1]] = 1
        ) : (
            table[cloth[1]]++
        )
    }
    
    console.log(table)

    
    for(row in table){
        console.log(row, table[row])
        answer *= (table[row] + 1)
    }
    
    answer -= 1;

    
    
    return answer;
}