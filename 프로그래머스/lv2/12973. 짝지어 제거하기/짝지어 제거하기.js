function solution(s)
{
 
    if(s.length % 2 == 1) return 0;
    
    var arr = [];
    s = s.split("");
    
    for(let i = 0; i < s.length; i++){
        if(!arr.length) arr.push(s[i])
        else if(arr[arr.length - 1] == s[i]){
            arr.pop();
        } else{
            arr.push(s[i]);
        }
    }
    
    

    return arr.length ? 0 : 1;
}