function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(0)
    
    function dfs(curr){
        visited[curr] = 1;
    
        for (let i = 0; i < n; i++){
            if (i !== curr && !visited[i] && computers[curr][i]) dfs(i);
        }
    }
    
    for (let i = 0; i < n; i++){
        if (!visited[i]){
            answer++
            dfs(i)
        }
    }
    
    return answer;
}