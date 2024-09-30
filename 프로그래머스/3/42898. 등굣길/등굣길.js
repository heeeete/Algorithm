function solution(m, n, puddles) {
    var answer = 0;
    const map = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0));
    for (const [x,y] of puddles) map[y][x] = -1;
    map[1][1] = 1;
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= m; j++){
            if ((i === 1 && j === 1 )|| map[i][j] === -1) continue;
            
            if (map[i - 1][j] > 0) map[i][j] += map[i - 1][j] % 1000000007
            if (map[i][j - 1] > 0) map[i][j] += map[i][j - 1] % 1000000007;
        }
    }
    
    return map[n][m] % 1000000007;
}
