function solution(genres, plays) {
    var answer = [];
    const gObj = {}
    const pObj = {}
    
    for (let i = 0; i < genres.length; i++){
        const [g, p] = [genres[i], plays[i]];
        if (gObj[g] === undefined) {
            gObj[g] = 0;
            pObj[g] = [];
        }
        gObj[g] += p;
        pObj[g].push([p, i]);
    }
    
    // console.log(gObj, pObj)
    const gArr = Object.entries(gObj)
    gArr.sort((a,b) => b[1] - a[1])
    for (const [g] of gArr){
        pObj[g].sort((a, b) => {
            if (a[0] !== b[0])
                return a[0] - b[0]
            else return b[1] - a[1]
        });
        
        for (let i = 0; i < 2 && pObj[g].length; i++){
            answer.push(pObj[g].pop()[1]);
        }
    }
    
    return answer;
}