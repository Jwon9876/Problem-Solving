const factorial = (num) => {
    if(!num) return 1;
    return num * factorial(--num);
};


console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

// Solution
// function factorial(x){
//    if (x < 0 ) return 0;
//    if (x <= 1 ) return 1;
//    return x * factorial(x-1);
// }
