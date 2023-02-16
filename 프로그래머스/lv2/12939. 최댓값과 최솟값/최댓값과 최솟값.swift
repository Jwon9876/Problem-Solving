func solution(_ s:String) -> String {
    
    let strSplitArr = s.split(separator: " ")
    let numberArr = strSplitArr.map{Int($0)!}
    
    return "\(numberArr.min()!) \(numberArr.max()!)"
}