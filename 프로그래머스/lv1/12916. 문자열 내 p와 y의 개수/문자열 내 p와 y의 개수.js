function solution(s){
    var answer = true;

    
    s = s.toUpperCase()
    console.log(s)
    var pArr = []
    var yArr = []
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'P' || s[i] == 'p') {
            pArr.push("P")
        }
        else if(s[i] == 'Y' || s[i] ==  'y'){
            yArr.push("Y")
        }
    }
    
    
    answer = (pArr.length == yArr.length) ? (true) : (false)
    return answer
    
    
}