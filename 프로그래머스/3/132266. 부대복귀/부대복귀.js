function solution(n, roads, sources, destination) {
    const dis = Array(n + 1).fill(-1);
    const graph = Array.from({length : n + 1}, () => [])
    
    for(let [s,e] of roads) {
        graph[s].push(e);
        graph[e].push(s);
    }
    
    const q = [destination];
    dis[destination] = 0;
    
    while (q.length) {
        const nodeIdx = q.shift();
        
        for (let node of graph[nodeIdx]){
            if (dis[node] === -1){
                dis[node] = dis[nodeIdx] + 1;
                q.push(node);
            }
        }
    }
    return sources.map(source => dis[source]);
}

// [][2][1,3][2]