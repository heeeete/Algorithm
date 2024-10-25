function solution(s)
{
    var answer = -1;
    const stack = []
    s = s.split('');
    
    for (let char of s){
        stack.push(char);
        if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
        }
    }
    
    return stack.length ? 0 : 1
}