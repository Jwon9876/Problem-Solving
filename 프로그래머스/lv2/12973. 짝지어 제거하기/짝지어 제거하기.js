function solution(s)
{
    
    var arr = []
    s = s.split("")
    
    for(let i = 0; i < s.length; i++){
        if(!arr.length) arr.push(s[i])
        else if(arr[arr.length - 1] == s[i]){
            arr.pop()
        } else{
            arr.push(s[i])
        }
    }
    console.log(arr)
    

    return arr.length ? 0 : 1;
}