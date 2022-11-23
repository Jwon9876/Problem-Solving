function solution(arr1, arr2) {
    var answer = [];
    
    
    var rowCount = arr1.length
    var colCount = arr1[0].length
    
    
    // console.log(rowCount, colCount)
    
    arr1 = arr1.flat()
    arr2 = arr2.flat()
    
    for(let i = 0; i < arr1.length; i++){
        arr1[i] = arr1[i] + arr2[i]
    }

    var i = 0;
    while(i < arr1.length){
        answer.push(arr1.slice(i, i + colCount))
        i += colCount
    }

    return answer;
}