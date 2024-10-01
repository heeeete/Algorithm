function diff(begin, target){
    let diffCnt = 0;
    for (let i = 0; i < begin.length; i++){
        if (begin[i] !== target[i]) {
            diffCnt++;
            if (diffCnt === 2) return false;
        }
    }
    return true
}

function solution(begin, target, words) {
    var answer = Infinity;
    const v = Array(words.length).fill(0);
    
    function dfs(curr, idx, cnt){
        
        if (curr === target) answer = answer > cnt ? cnt : answer

        for (let i = 0; i < words.length; i++){
            if (!v[i] && diff(curr, words[i])) {
                v[i] = 1;
                dfs(words[i], i, cnt + 1)
                v[i] = 0
            }
        }
    }
    
    for (let i = 0; i < words.length; i++){
        if (diff(begin, words[i])) {
            v[i] = 1;
            dfs(words[i], i, 1)
        }
    }
    return answer === Infinity ? 0 : answer;
}