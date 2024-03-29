function solution(n) {
    
    var arr = [];
    
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 3;
    
    for(let i = 4; i <= n; i++){
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567
    }
    
    
    
    return arr[n];
}



/*
1 = 1

2
    1 1
    2
3
    1 1 1
    1 2
    2 1
4
    1 1 1 1
    1 1 2
    1 2 1
    2 1 1
    2 2 

*/