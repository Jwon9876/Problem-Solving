function getPrimeNumberArr(numbers){
    let primeNumberArr = new Array(Math.pow(10, numbers.length)).fill(true);
    primeNumberArr[0] = false;
    primeNumberArr[1] = false;
    
    for(let i = 2; i < Math.sqrt(primeNumberArr.length); i++){
        for(let j = i + i; j < primeNumberArr.length; j += i){
            primeNumberArr[j] = false;
        }
    }
    
    return primeNumberArr;
}

function solution(numbers) {
    
    const primeNumberArr = getPrimeNumberArr(numbers);
    
    let numberSet = new Set();
    let visited = new Array(numbers.length).fill(false);
    
    numbers = numbers.split("");
    
    function dfs(i, numberString){
        
        for(let j = 0; j < visited.length; j++){
            
            if(visited[j] == false){
                
                visited[j] = true;
                let parsedToNumber = parseInt(numberString + numbers[j]);
                
                if(primeNumberArr[parsedToNumber]){
                    numberSet.add(parsedToNumber);
                }
                
                dfs(j, numberString + numbers[j]);
                
                visited[j] = false;
            }    
        }
    }
    
    dfs(0, "")
        
    return numberSet.size;
}