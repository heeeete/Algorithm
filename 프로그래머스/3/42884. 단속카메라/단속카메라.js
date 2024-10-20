function solution(routes) {
    var answer = 1;
    routes.sort((a,b) => a[0] - b[0]);
    
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