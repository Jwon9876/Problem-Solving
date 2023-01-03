/*
* areThereDuplicates(1, 2, 3) // false
* areThereDuplicates(1, 2, 2) // true 
* areThereDuplicates('a', 'b', 'c', 'a') // true
*/

// 내가 푼 풀이1
function areThereDuplicates1() {

    const arr = [...arguments];

    if (arr.length === 0) return false;

    const set = new Set(arr);
    if (set.size !== arr.length) return true;

    return false;
}

console.log(areThereDuplicates1(1, 2, 3))
console.log(areThereDuplicates1(1, 2, 2))
console.log(areThereDuplicates1('a', 'b', 'c', 'a'))

// 내가 푼 풀이2
function areThereDuplicates2() {

    const arr = [...arguments];

    if (arr.length === 0) return false;

    let FrequencyCounter = {};

    for (const key of arr) {
        FrequencyCounter[key] = (FrequencyCounter[key] || 0) + 1;
    }

    for (const key of arr) {
        if (FrequencyCounter[key] > 1) return true;
    }

    return false;
}

console.log(areThereDuplicates2(1, 2, 3))
console.log(areThereDuplicates2(1, 2, 2))
console.log(areThereDuplicates2('a', 'b', 'c', 'a'))


// Solutions

// 빈도 수 세기 패턴
function areThereDuplicatesSolution1() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}

// 다중 포인터 패턴
function areThereDuplicatesSolution2(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

// One Linear
function areThereDuplicatesSolution3() {
    return new Set(arguments).size !== arguments.length;
}