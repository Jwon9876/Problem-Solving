function solution(s) {
    var answer = '';
    
    
    
    answer = s.split(" ").map((v) => v.charAt(0).toUpperCase() + v.slice(1, v.length).toLowerCase()).join(" ")
    
    console.log(answer)
    return answer;
}