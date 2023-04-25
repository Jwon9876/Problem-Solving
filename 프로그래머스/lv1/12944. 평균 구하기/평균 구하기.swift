func solution(_ arr:[Int]) -> Double {
    let sumInt = arr.reduce(0){$0 + $1}
    let sumFloat = Double(sumInt)
    return sumFloat / Double(arr.count)
}