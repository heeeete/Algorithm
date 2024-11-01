function solution(sequence) {
    let max = Math.max(sequence[0], -sequence[0]);
    const dp = [sequence[0]]
    const dp2 = [sequence[0] * -1]
    
    for (let i = 1; i < sequence.length; i++){
        if (i % 2 !== 0) dp[i] = Math.max(dp[i - 1] + -sequence[i], -sequence[i]);
        else dp[i] = Math.max(dp[i - 1] + sequence[i], sequence[i]);
        if (max < dp[i]) max = dp[i]
    }
    for (let i = 1; i < sequence.length; i++){
        if (i % 2 === 0) dp2[i] = Math.max(dp2[i - 1] + -sequence[i], -sequence[i]);
        else dp2[i] = Math.max(dp2[i - 1] + sequence[i], sequence[i]);
        if (max < dp2[i]) max = dp2[i]
    }
    return max
}