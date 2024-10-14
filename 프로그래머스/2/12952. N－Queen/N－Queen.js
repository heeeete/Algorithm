function solution(n) {
    var answer = 0;
    const map = Array.from({length : n}, () => Array(n).fill(0));
    
    function check(pos){
        const dx = [0, 1, -1];
        const dy = [-1, -1, -1];
        
        for (let i = 0; i < 3; i++){
            let my = pos[0];
            let mx = pos[1];
            while (my >= 0 && mx >= 0 && my < n && mx < n){
                if (map[my][mx] === 'Q') return false;
                my += dy[i];
                mx += dx[i];
            }
        }
        return true
    }
                           
    function dfs(cnt, pos) {
        if (cnt === n) return answer++;
        
        // for (let i = pos[0]; i < n; i++){
            for (let j = pos[1]; j < n; j++){
                if (check([pos[0],j])) {
                    map[pos[0]][j] = 'Q';
                    dfs(cnt + 1, [pos[0] + 1,0]);
                    map[pos[0]][j] = 0;
                }
            }
        // }
    }
    
    dfs(0,[0,0])
    
    return answer;
}