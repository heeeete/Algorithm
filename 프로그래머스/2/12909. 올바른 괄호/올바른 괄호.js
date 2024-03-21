function check(s){
    const stack = [];
    for (let i = 0; i < s.length; i++){
        if (s[i] === ')' && !stack.length) return false;
        else if (s[i] === ')') stack.pop();
        else stack.push(s[i]);
    }
    if (stack.length) return false;
    else return true;
}

function solution(s){
    return check(s);
}