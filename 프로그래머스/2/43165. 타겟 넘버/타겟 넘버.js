function solution(numbers, target) {
    var answer = 0;
    
    function dfs(num, idx){
        if (idx === numbers.length){
            if (num === target) answer++;
            return ;
        } 
        dfs(num + numbers[idx], idx + 1);
        dfs(num - numbers[idx], idx + 1);
    }
    
    dfs(0, 0)
    
    return answer;
}