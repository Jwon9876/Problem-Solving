/*
*
* sameFrequency(182,281) // true
* sameFrequency(34,14) // false
* sameFrequency(3589578, 5879385) // true
* sameFrequency(22,222) // false
*
*/


// 내가 푼 풀이1
function sameFrequency(num1, num2){

    const numToStr1 = String(num1);
    const numToStr2 = String(num2);

    if(numToStr1.length !== numToStr2.length) return false;
    
    let firstFrequencyCounter = {};
    let secondFrequencyCounter = {};

    for (const key of numToStr1) {
        firstFrequencyCounter[key] = (firstFrequencyCounter[key] || 0) + 1;
    }

    for (const key of numToStr2) {
        secondFrequencyCounter[key] = (secondFrequencyCounter[key] || 0) + 1;
    }

    for (const key of numToStr1) {
        if(firstFrequencyCounter[key] !== secondFrequencyCounter[key]) return false;
    }

    return true;
}

console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22,222));