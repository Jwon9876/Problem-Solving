func solution(_ n:Int) -> Int {
    
    var total : Int = 0;
    
    var divisor = n;
    
    while(divisor > 0){
        if n % divisor == 0{
            total += divisor
        }
        divisor -= 1
    }
    
    return total
}