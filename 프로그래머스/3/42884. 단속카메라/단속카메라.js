function solution(routes) {
    var answer = 1;
    
    routes.map(e => e.sort((a,b) => a - b));
    routes.sort((a,b) => a[0] - b[0]);
    
    console.log(routes)
    let target;
    for (let i = routes.length - 1; i >= 0; i--){
        if (!target) {
            target = routes[i][0];
            continue;
        }
        if (target > routes[i][1]) {
            answer++;
            target = routes[i][0];
        }
    }
    return answer;
}