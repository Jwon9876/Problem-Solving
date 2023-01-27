function getSplitArr(str) {
    
    const regExp = /[A-Z][A-Z]/;
    
    let splitStrArr = [];
    
    for(let i = 0; i < str.length - 1; i++){
        let splitStr = str.slice(i, i + 2);
        if(splitStr.match(regExp)){
            splitStrArr.push(splitStr);
        }
    }
    return splitStrArr;
}


function solution(str1, str2) {
        
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    let splitStr1Arr = getSplitArr(str1);
    let splitStr2Arr = getSplitArr(str2);
    
    if(!splitStr1Arr.length && !splitStr2Arr.length) return 65536;
    
    let unionArr = [];
    let intersectionArr = [];
    let unionAllArr = [];
        
    for(let i = 0; i < splitStr1Arr.length; i++){
        
        let splitStr = splitStr1Arr[i];
        
        if(splitStr2Arr.includes(splitStr)){
            
            let index = splitStr2Arr.indexOf(splitStr);
                
            intersectionArr.push(splitStr);
            splitStr2Arr.splice(index, 1);
        } else{
            unionArr.push(splitStr)
        }
    }
    
    splitStr2Arr.forEach((v) => unionArr.push(v))
    
    // A, B의 합집합은
    // 중복 제거된 A + 중복 제거된 B 의 원소의 중복 허용된 합집합
    unionAllArr = [...unionArr, ...intersectionArr];
    
    const JaccardSimilarity = parseInt((intersectionArr.length / unionAllArr.length) * 65536)
    
    
    
    return JaccardSimilarity;
}
