function solution(n) {
    
    
    /*
    1 => 1
    2 => 2
    3 => 3
    4 => 5
    5 => 8
        3
        4
        1
    */
    
    let arr = [0, 1, 2, 3];
    
    for(let i = 4; i <= n; i++){
        arr[i] = (arr[i - 1] % 1000000007) + (arr[i - 2] % 1000000007);
        arr[i] %= 1000000007;
    }
    
    return arr[n];
}