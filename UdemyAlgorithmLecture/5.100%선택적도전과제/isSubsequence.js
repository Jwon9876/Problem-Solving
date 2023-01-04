/*
*
* Multiple Pointers - isSubsequence
* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
* 
* Examples:
* 
* isSubsequence('hello', 'hello world'); // true
* isSubsequence('sing', 'sting'); // true
* isSubsequence('abc', 'abracadabra'); // true
* isSubsequence('abc', 'acb'); // false (order matters)
* Your solution MUST have AT LEAST the following complexities:
* 
* Time Complexity - O(N + M)
* 
* Space Complexity - O(1)
*
*/

function isSubsequence(str1, str2) {
    let subString = "";

    let i = 0;

    for (let j = 0; j < str2.length; j++) {

        if (str2[j] == str1[i]) {
            subString += str1[i];
            i++;
        }

    }

    if (subString == str1) return true;
    return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));

function isSubsequenceSolution1(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequenceSolution1('hello', 'hello world'));
console.log(isSubsequenceSolution1('sing', 'sting'));
console.log(isSubsequenceSolution1('abc', 'abracadabra'));
console.log(isSubsequenceSolution1('abc', 'acb'));


function isSubsequenceSolution2(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequenceSolution2(str1.slice(1), str2.slice(1))
    return isSubsequenceSolution2(str1, str2.slice(1))
}

console.log(isSubsequenceSolution2('hello', 'hello world'));
console.log(isSubsequenceSolution2('sing', 'sting'));
console.log(isSubsequenceSolution2('abc', 'abracadabra'));
console.log(isSubsequenceSolution2('abc', 'acb'));