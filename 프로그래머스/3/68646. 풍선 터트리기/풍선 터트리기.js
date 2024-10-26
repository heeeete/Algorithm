function solution(a) {
    var answer = 0;
    const len = a.length
    const left = Array(len);
    const right = Array(len);
    left[0] = a[0];
    right[len - 1] = a[len - 1];
    for (let i = 1; i < len; i++) left[i] = Math.min(left[i - 1], a[i]);
    for (let j = len - 2; j >= 0; j--) right[j] = Math.min(right[j + 1], a[j]);
    
    return new Set([...left, ...right]).size;
}