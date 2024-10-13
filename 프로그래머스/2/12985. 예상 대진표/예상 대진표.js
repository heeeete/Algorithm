function solution(n,a,b)
{
    var answer = 1;

    while (1){
        if (Math.abs(a - b) === 1){
            if (a > b && b % 2 !== 0) break;
            else if (b > a && a % 2 !== 0) break;
        }
        a = a % 2 === 0 ? a / 2 : Math.floor(a / 2) + 1
        b = b % 2 === 0 ? b / 2 : Math.floor(b / 2) + 1
        answer++
        
    }


    return answer;
}