function solution(n,a,b)
{
    var answer = 0;
    
    // a: 4 -> 2 -> 1
    // b: 5 -> 3 -> 2
    
    let left = (a >= b) ? (b) : (a)
    let right = (a < b) ? (b) : (a)
    
    console.log(left, right)
    
    
    while(true){
        left /= 2;
        right /= 2;
        
        left = Math.round(left)
        right = Math.round(right)
        
        // console.log(left, right)
        answer++;
        
        if(left == right) break;
        
        
    }
    
    
    
    
    
    

    return answer;
}