function solution(nums) {
    
    let arr = new Set(nums)
    let filtered = [...arr]
    
    return (nums.length / 2 < filtered.length) ? (nums.length / 2) : (filtered.length);
}