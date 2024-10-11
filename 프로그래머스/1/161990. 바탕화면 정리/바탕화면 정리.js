function solution(wallpaper) {
    var answer = [0,0,0,0];
    let files = []
    for (let i = 0; i < wallpaper.length; i++){
        for (let j = 0; j < wallpaper[0].length; j++){
            if (wallpaper[i][j] === '#') files.push([i,j]);
        }
    }
    
    files.sort((a,b) => a[0] - b[0]);
    answer[0] = files[0][0];
    answer[2] = files[files.length - 1][0] + 1;
    files.sort((a,b) => a[1] - b[1]);
    answer[1] = files[0][1];
    answer[3] = files[files.length - 1][1] + 1;
    
    return answer;
}