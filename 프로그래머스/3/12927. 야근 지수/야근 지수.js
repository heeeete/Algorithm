function solution(n, works) {
    if (works.reduce((a,b) => a + b) <= n) return 0
    works.sort((a,b) => b - a)
    
    while(n){
        for(let i = 0; i < works.length && n; i++){
            if (works[i] !== works[i + 1]) {
                n--;
                works[i]--;
                break;
            }
            else {
                n--;
                works[i]--;
            } 
        }
    }
    works = works.map(e => e * e);
    return works.reduce((a,b) =>  a + b)
}

// 6 2 1
// 5 1 1
// 4 1 1
    
// 16 + 2

// 6 2 2
// 2 2 2 
// 4 4 4