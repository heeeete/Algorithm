function solution(arr)
{
    const answer = []
    let curr
    for (const n of arr){
        if (curr !== n) {
            answer.push(n);
            curr = n;
        }
    }
    
    return answer;
}