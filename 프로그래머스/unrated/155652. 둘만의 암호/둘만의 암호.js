const solution = (s, skip, index) => {
    
    const skipObj = {};
    skip.split("").forEach((v) => skipObj[v] = true);
    
    const alphabet = {};
    
    new Array(26).fill(0)
        .map((v, i) => {
            const temp = String.fromCharCode(97 + i)
            if(!skipObj[temp]) return temp
        })
        .filter((v) => v)
        .map((v, i) => {
            if(v){
                alphabet[v] = i;
                alphabet[i] = v;
            }
    })
    
    const alphabetSize = Object.keys(alphabet).length;
    
    let a = ""
    for(let i = 0; i < s.length; i++){
        
        a += alphabet[(alphabet[s[i]] + index) % (alphabetSize / 2)]
    }
    
    
    return a;
    
    
    
    
}