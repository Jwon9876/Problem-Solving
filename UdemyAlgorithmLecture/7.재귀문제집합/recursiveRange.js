const recursiveRange = (num) => {
  if (num === 1) return 1;
  else return num + recursiveRange(num - 1);
};

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

// Solution
// function recursiveRange(x){
//    if (x === 0 ) return 0;
//    return x + recursiveRange(x-1);
// }
