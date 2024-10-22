function solution(n) {
    const arr = []
    
    while (n){
        let a = n % 3;
        if (a === 0) {
            a = 4;
            n--
        }
        arr.push(a);
        n = Math.floor(n / 3);
        
    }
    return arr.reverse().join('');
}