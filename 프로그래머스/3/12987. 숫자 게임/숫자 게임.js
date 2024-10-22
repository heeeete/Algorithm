function solution(A, B) {
    var answer = 0;
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    
    let j = 0;
    for (let i = 0; i < A.length; i++){
        if (A[i] < B[j]) {
            answer++;
            j++;
        }
    }
    return answer;
}

// 7 5 3 1
// 8 6 2 2

// 7 5 4 2 1
// 9 9 3 2 1
