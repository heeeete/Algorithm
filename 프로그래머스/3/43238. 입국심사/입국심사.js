function solution(n, times) {
    var answer = 0;
    let l = 1;
    let r = n * times[times.length - 1];
    
    while (l <= r){
        let cnt = 0;
        let m = Math.floor((l + r) / 2);
        for (const time of times){
            cnt += Math.floor(m / time);
        }
        
        if (cnt >= n) {
            r = m - 1
            answer = m;
        }
        else {
            l = m + 1;
        }
    }
    return answer;
}