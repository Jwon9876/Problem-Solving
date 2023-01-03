/*
 * 
 * 
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4 
 * 
 */

// 내가 푼 풀이 1
function countUniqueValues1(arr){
    const uniqueSet = new Set(arr);
    return uniqueSet.size;
}

console.log(countUniqueValues1([1,2,3,4,4,4,7,7,12,12,13]));

// 내가 푼 풀이 2
function countUniqueValues2(arr){
    
    if(!arr.length) return 0;

    let uniqueValuesCount = 1;
    let left = 0;
    let right = left + 1;

    while(left !== arr.length - 1){
        if(arr[left] !== arr[right]){
            uniqueValuesCount++;
            left = right;
            right = left + 1;
        } else{
            right++;
        }
    }
    return uniqueValuesCount;
}

console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]));

// solution

function countUniqueValuesSolution(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValuesSolution([1,1,2,2,5,7,7,99]));

