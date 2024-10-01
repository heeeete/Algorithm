function solution(n, edge) {
    var answer = 1;
    const cnt = Array(n + 1).fill(0)
    const graph = Array.from({length : n + 1}, () => Array(0).fill([]))
    for (const [s,e] of edge){
        graph[s].push(e)
        graph[e].push(s)
    }
    const set = new Set();
    set.add(1)
    const q = [1]

    while (q.length){
        const len = q.length;
        for (let i = 0; i < len; i++){
            const node = q.shift();
            for (let j = 0; j < graph[node].length; j++){
                if (!set.has(graph[node][j])){
                    q.push(graph[node][j]);
                    set.add(graph[node][j]);
                    cnt[graph[node][j]] = answer;
                }
            }
        }
        answer++;
    }
    const max = Math.max(...cnt)
    answer = cnt.filter(e => e === max).length;
    return answer;
}