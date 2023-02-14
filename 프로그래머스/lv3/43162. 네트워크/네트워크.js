function solution(n, computers) {
    
    let answer = 0;
    let visited = new Array(computers.length).fill(0);
    
    function dfs(i){
        visited[i] = !visited[i];
        
        for(let j = 0; j < computers.length; j++){
            if(!visited[j] && computers[i][j]){
                dfs(j);
            }
        }
    }
    
    for(let i = 0; i < visited.length; i++){
        if(!visited[i]){
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}