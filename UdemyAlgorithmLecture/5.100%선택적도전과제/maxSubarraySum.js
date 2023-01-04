/*
*
* Sliding Window - maxSubarraySum
* Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
*
* Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*
* maxSubarraySum([100,200,300,400], 2) // 700
* maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
* maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
* maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
* maxSubarraySum([2,3], 3) // null
* Constraints:
*
* Time Complexity - O(N)
*
* Space Complexity - O(1)
*
*/

// 내가 풀 풀이1
function maxSubarraySum(arr, limit){

    if (arr.length < limit) return null;

    let maxSum = 0;

    for (let i = 0; i < limit; i++) {
        maxSum += arr[i];
    }

    let tempSum = maxSum;


    for (let j = limit; j < arr.length; j++) {

        tempSum += arr[j] - arr[j - limit];

        if(tempSum > maxSum) {
            maxSum = tempSum;
        }

    }

    return maxSum;
}


console.log(maxSubarraySum([100,200,300,400], 2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) );
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));
console.log(maxSubarraySum([2,3], 3));



function maxSubarraySumSolution(arr, num){
    if (arr.length < num) return null;

    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

console.log(maxSubarraySumSolution([100,200,300,400], 2));
console.log(maxSubarraySumSolution([1,4,2,10,23,3,1,0,20], 4) );
console.log(maxSubarraySumSolution([-3,4,0,-2,6,-1], 2));
console.log(maxSubarraySumSolution([3,-2,7,-4,1,-1,4,-2,1],2));
console.log(maxSubarraySumSolution([2,3], 3));
