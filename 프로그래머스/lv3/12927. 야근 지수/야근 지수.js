function solution(n, works) {
    
    works.sort((a, b) => b - a);
    
    while(n > 0){
        
        const max = works[0];
        
        for(let i = 0; i < works.length; i++){
            
            if(max == 0) return 0;
            
            if(max == works[i] && n > 0){
                works[i]--;
                n--;
            }
            
            if(!n) break;
            
        }
        
        works.sort((a, b) => b - a);
        
    }
    
    const overtime = works.reduce((a, v) => a + Math.pow(v, 2), 0);
    
    return overtime;
    
    
}