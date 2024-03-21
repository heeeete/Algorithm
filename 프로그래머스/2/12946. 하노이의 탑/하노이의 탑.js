function solution(n) {
    var answer = [];
    
    function hanoi(n, target, to, other){
        if (n === 0) return ;
        hanoi(n - 1, target, other, to)
        answer.push([target, to]);
        hanoi(n - 1, other, to , target)
    }   
    
    hanoi(n, 1, 3, 2);

    
    return answer;
}