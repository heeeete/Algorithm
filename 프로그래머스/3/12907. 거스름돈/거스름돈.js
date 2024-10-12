function solution(n, money) {
    var answer = 0;
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    const MOD = 1000000007;

    for (const m of money){
        for (let i = m; i <= n; i++){
            dp[i] = (dp[i] + dp[i - m]) % MOD;
        }
    }
    return dp[n]
}
