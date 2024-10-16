function solution(user_id, banned_id) {
    var answer = 0;
    let obj = {};
    const arr = Array.from({length: banned_id.length}, () => []);
    let a = [];
    
    const check = (u,b) => {
        if (u.length !== b.length) return false;
        for (let i = 0; i < u.length; i++){
            if (b[i] === '*') continue;
            if (u[i] !== b[i]) return false;
        }
        return true;
    }
    
    const dfs = (idx, temp) => {
        if (idx === arr.length) {
            a.push(temp);
            return answer++;
        }
        
        for (let i = 0; i < arr[idx].length; i++){
            if (obj[arr[idx][i]] === undefined) {
                obj[arr[idx][i]] = 1;
                dfs(idx + 1, [...temp, arr[idx][i]]);
                obj[arr[idx][i]] = undefined;
            }
        }
    }
    
    for (let i = 0; i < banned_id.length; i++){
        for (let j = 0; j < user_id.length; j++){
            if (check(user_id[j],banned_id[i])) arr[i].push(user_id[j])
        }
    }

    dfs(0, []);
    a = a.map(e => e.sort())
    const temp = a.join('|').split('|');
    const b = new Set(temp);
    
    return b.size;
}


// frodo fradi
// frodo crodo
// abc123 frodoc
// abc123 frodoc

