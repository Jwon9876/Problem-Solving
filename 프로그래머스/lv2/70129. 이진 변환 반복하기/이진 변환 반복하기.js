function toBinary(s){
    
    var num = parseInt(s.length)
    var convertedArr = []
    var convertedStr = ""
    
    while(num > 0){
        convertedArr.push(num % 2)
        num /= 2
        num = Math.floor(num)
    }

    convertedStr = convertedArr.reverse().join("")
    
    return convertedStr    
}


function toDeleteZeroChar(s){
    
    var deletedZeroStr = "";
    var deletedCount = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] !== '0') deletedZeroStr += s[i]
        else deletedCount++;
    }
    
    return {deletedZeroStr, deletedCount}
}


function solution(s) {
    
    var answer = [];
    var count = 0;
    var deletedCount = 0;
    
    while(s !== "1"){
        s = toDeleteZeroChar(s)
        deletedCount += s.deletedCount
        s = toBinary(s.deletedZeroStr)
        count++;
    }
        
    return [count, deletedCount];
}