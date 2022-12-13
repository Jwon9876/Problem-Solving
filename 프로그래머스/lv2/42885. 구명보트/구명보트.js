function solution(people, limit) {

    var answer = 0;
    
    people.sort((a, b) => (a - b))
    
    let left = 0;
    let right = people.length - 1;
    
    while(left <= right){
    
        let sum = people[left] + people[right];
        // console.log(people[left], people[right], sum, left, right);
        
        if(sum <= limit){
            answer++;
            right--;
            left++;
        } else{
            answer++;
            right--;
        }
        
    }
    
    return answer;
}