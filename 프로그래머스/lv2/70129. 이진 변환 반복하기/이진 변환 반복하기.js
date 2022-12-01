

var deletedCount = 0;

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
    
    for(let i = 0; i < s.length; i++){
        if(s[i] !== '0') deletedZeroStr += s[i]
        else deletedCount++;
    }
    
    return deletedZeroStr
}


function solution(s) {
    var answer = [];
    var count = 0;    
    
    // console.log(toDeleteZeroChar(s))
    
    // 한 사이클이
    // (toDeleteZeroChar + toBinary) =  한 사이클
    
    
    // toBinary(s)
    
    
    while(s !== "1"){
        s = toDeleteZeroChar(s)
        s = toBinary(s)
        count++;
    }
    
    console.log([count, deletedCount])
    
    return [count, deletedCount];
}