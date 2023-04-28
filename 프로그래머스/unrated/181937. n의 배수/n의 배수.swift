import Foundation

func solution(_ num:Int, _ n:Int) -> Int {
    let reminder = num % n
    
    if reminder == 0{
        return 1
    }
        
    return 0
    
}