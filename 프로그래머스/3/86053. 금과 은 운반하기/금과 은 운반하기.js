function check(time,a,b,g,s,w,t){
    let sumA = 0;
    let sumB = 0;
    let total = 0;
    
    for (let i = 0; i < t.length; i++){
        let cnt = Math.floor(time / (t[i] * 2));
        if (time % (t[i] * 2) >= t[i]) cnt++;
        let W = w[i] * cnt;
        sumA += Math.min(W, g[i]);
        sumB += Math.min(W, s[i]);
        total += Math.min(W, g[i] + s[i]);
    }
    if (sumA >= a && sumB >= b && total >= a + b) return true
    return false;
}

function solution(a, b, g, s, w, t) {
    var answer = Infinity;
    let start = 0;
    let maxMineral = 1000000000 * 2;
    let maxTime = 100000 * 2
    let end = maxMineral * maxTime;

    while(start <= end){
        let mid = Math.floor((end + start) / 2);
        
        if (check(mid,a,b,g,s,w,t)){
            end = mid - 1;
            answer = Math.min(answer , mid)
        }
        else {
            start = mid + 1;
        }
    }
    return answer
}

// 최악의 상황
// 트럭 = 1
// 트럭 사이즈 = 2
// 필요한 광물 = 10
// 트럭 편도 시간 = 1

// 편도 + (9 / 트럭 사이즈) * 왕복