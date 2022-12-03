// function isPrime(n){
    

    
    
// }


function solution(n) {

    
    var answer = 0;
    
    var arr = Array(n + 1).fill(1);
    
    arr[0] = 0;
    arr[1] = 0;
    
    for(let i = 2; i <= n; i++){
        
        if(arr[i] == 0) continue
        
        for(let j = i + i; j <= n; j += i){
            if(arr[j] !== 0){
                arr[j] = 0
            } else{
                continue
            }
            
            // console.log(j)
        }
        
    }
    
    
    console.log(arr)
    
    console.log(arr.join("").replaceAll(0, "").length)
    
    return arr.join("").replaceAll(0, "").length;
}