/*
(1 + a) - 1
(1 + a)(1 + b) = a + b + ab + 1
(1 + a)(1 + b)(1 + c) = a + b + c + ab + bc + ac + abc + 1
*/
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
    
    for(row in table){
        answer *= (table[row] + 1)
    }
    
    answer -= 1;
    
    return answer;
}