function solution(k, dungeons) {
    
    let answer = -1;
    let visited = new Array(dungeons.length).fill(false);
    
    
    function dfs(currentFatigue, depth){
        
        for(let i = 0; i < dungeons.length; i++){
            
            // 최소 필요 피로도, 소모 피로도
            if(!visited[i] && currentFatigue >= dungeons[i][0]){
                visited[i] = !visited[i];
                dfs(currentFatigue - dungeons[i][1], depth + 1);   
                visited[i] = !visited[i];
            }  
        }
        answer = Math.max(answer, depth);
    }
    
    dfs(k, 0);
    
    return answer;
}