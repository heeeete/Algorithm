function solution(storey) {
    var answer = 0;
    
    while (storey) {
        const curr = storey % 10;  // 현재 자리수 확인
        storey = Math.floor(storey / 10);  // 다음 자리로 이동
        
        if (curr > 5) {
            answer += 10 - curr;  // 올림 처리
            storey++;  // 다음 자리 올림
        } else if (curr === 5) {
            // 현재 자리수가 5일 때 다음 자리수를 확인
            if (storey % 10 >= 5) {
                answer += 10 - curr;  // 올림 처리
                storey++;  // 다음 자리 올림
            } else {
                answer += curr;  // 그대로 처리
            }
        } else {
            answer += curr;  // 5 이하일 경우 그대로 처리
        }
    }
    
    return answer;
}