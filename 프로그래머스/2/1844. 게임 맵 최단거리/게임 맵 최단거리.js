function solution(maps) {
    var answer = 0;
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const q = [[0,0]];
    let idx = 0;
    
    while(q.length !== idx){
        const len = q.length;
        for (let i = 0; i < len; i++){
            let [y,x] = q.shift();
            // let [y,x] = q[idx++];
            maps[y][x] = 0;
            for (let j = 0; j < 4; j ++){
                const [dy, dx] = dir[j];
                const [my, mx] = [y + dy, x + dx];
                if (my === maps.length - 1 && mx === maps[0].length) return answer + 1
                if (my >= 0 && mx >= 0 
                    && my < maps.length 
                    && mx < maps[0].length
                    && maps[my][mx] === 1) {
                    maps[my][mx] = 0
                    q.push([my, mx]);
                }
            }
        }
        answer++;
    }
    
    return -1;
}