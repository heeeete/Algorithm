function solution(routes) {
    var answer = 0;
    routes.sort((a,b) => a[1] - b[1]);
    
    let target = -Infinity;
    for (let i = 0; i < routes.length; i++){
        if (target < routes[i][0]) {
            answer++;
            target = routes[i][1];
        }
    }
    return answer;
}