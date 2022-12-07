function solution(nums) {
    var answer = 0;
    
    
    console.log(nums.length / 2)
    
    var arr = new Set(nums)
    arr = [...arr]
    
    console.log(arr)
    return (nums.length / 2 < arr.length) ? (nums.length / 2) : (arr.length);
}