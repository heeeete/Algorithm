function solution(n) {
    let curr = 1;
    let prev = 1;
    let prevPrev = 1;
    let temp;
    
    for (let i = 2; i <= n; i++){
        temp = curr;
        curr = (prev + prevPrev) % 1000000007;
        prevPrev = prev;
        prev = curr
    }
    
    return curr;
}