function solution(a, b) {
    var answer = 0;
    
    for(let i = a; i > 0; i--){
        if(a % i == 0 && b % i == 0){
            a /= i;
            b /= i;
        }
    }
    
    while(b > 1){
        if(b % 2 == 0){
            b /= 2;
            console.log(b)
        } else if(b % 5 == 0){
            b /= 5;
            console.log(b)
        } else{
            console.log(b)
            return 2
        }
    }
    return 1;
}