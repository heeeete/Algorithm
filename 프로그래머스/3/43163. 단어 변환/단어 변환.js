function diff(begin, target){
    let cnt = 0;
    for (let i = 0; i < begin.length; i++){
        if (begin[i] !== target[i]){
            cnt++
            if (cnt === 2) return false;
        }
    }
    return true;
}

function solution(begin, target, words) {
    var answer = 0;
    const v = Array(words.length).fill(0)
    const q = [begin];
    
    while (q.length){
        const len = q.length;
        for (let i = 0; i < len; i++){
            const str = q.shift();
            for (let j = 0; j < words.length; j++){
                if (diff(str, words[j]) && !v[j]){
                    if (words[j] === target) return answer + 1
                    v[j] = 1;
                    q.push(words[j]);
                }
            }
        }
        answer++;
    }
    return 0;
}