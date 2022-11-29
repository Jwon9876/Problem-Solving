function solution(sizes) {
    var answer = 1;

    console.log(sizes.length)
    
    
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            var temp = sizes[i][0];
            sizes[i][0] = sizes[i][1]
            sizes[i][1] = temp;
        }
    }
    
    for(let i = 0; i < 2; i++){
        var maxSize = 0;
        for(let j = 0; j < sizes.length; j++){
            (sizes[j][i] > maxSize) ? (maxSize = sizes[j][i]) : (maxSize = maxSize)
        }
        answer *= maxSize;
    }
    
    return answer;
    
}
