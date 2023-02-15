function solution(s1, s2) {
    var answer = 0;
    
    let length = 0;
    
    let arr1 = [];
    let arr2 = [];
    
    if(s1 > s2){
        length = s2.length;
        arr1 = s2;
        arr2 = s1;
    } else{
        length = s1.length;
        arr1 = s1;
        arr2 = s2;
    }
    
    for(const word of arr1){
        if(arr2.indexOf(word) !== -1){
            answer++;
        }
    }
    
    
    return answer;
}