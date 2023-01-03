/*
 *
 * validAnagram('', '') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('anagram', 'nagaram') // true
 * validAnagram("rat","car") // false) // false
 * validAnagram('awesome', 'awesom') // false
 * validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
 * validAnagram('qwerty', 'qeywrt') // true
 * validAnagram('texttwisttime', 'timetwisttext') // true
 * 
 */


// 내가 푼 풀이
function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let charCounter1 = {};
    let charCounter2 = {};

    for (let char of str1) {
        if(/a-zA-Z/){
            char = char.toLowerCase();
            charCounter1[char] = (charCounter1[char] || 0) + 1;
        }
    }

    for (let char of str2) {
        if(/a-zA-Z/){
            char = char.toLowerCase();
            charCounter2[char] = (charCounter2[char] || 0) + 1;
        }
    }

    for (let key in charCounter1) {
        if(charCounter1[key] !== charCounter2[key]){
            return false;
        }
    }
    return true;

}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram("rat","car"))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))


// solution
function validAnagramSolution(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
console.log(validAnagramSolution('', ''))
console.log(validAnagramSolution('aaz', 'zza'))
console.log(validAnagramSolution('anagram', 'nagaram'))
console.log(validAnagramSolution("rat","car"))
console.log(validAnagramSolution('awesome', 'awesom'))
console.log(validAnagramSolution('amanaplanacanalpanama', 'acanalmanplanpamana'))
console.log(validAnagramSolution('qwerty', 'qeywrt'))
console.log(validAnagramSolution('texttwisttime', 'timetwisttext'))
