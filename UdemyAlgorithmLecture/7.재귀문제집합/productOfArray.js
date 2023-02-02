const productOfArray = (arr) => {

    const helperMethod = (arr) => {
        if (arr.length == 0) return 1;
        else return  arr[0] * helperMethod(arr.slice(1));
    };

    let productResult = helperMethod(arr);

    return productResult;

};

console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60

// Solution
// function productOfArray(arr) {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }
