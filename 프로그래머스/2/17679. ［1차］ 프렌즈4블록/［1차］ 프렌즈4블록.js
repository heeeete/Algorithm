function solution(m, n, board) {
    var answer = 0;
    const arr = []
    board = board.map(e => e.split(''))
    let rotateBoard = Array.from({length: n}, () => Array(m).fill(0));
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            rotateBoard[i][j] = board[m - j - 1][n - i - 1];
        }
    }
    
    function check(x,y){
        if (rotateBoard[x][y] !== 0) {
            rotateBoard[x][y] = 0;
            answer++;
        }
    }
    
    while(1){
        for (let i = 0; i < rotateBoard.length - 1; i++){
            for (let j = 0; j < rotateBoard[i].length - 1; j++){
                const base = rotateBoard[i][j]
                if (base === rotateBoard[i][j + 1] &&
                    base === rotateBoard[i + 1][j] &&
                    base === rotateBoard[i + 1][j + 1])
                    arr.push([i,j]);
            }
        }
        const len = arr.length;
        if (len === 0) break;
        
        for (let i = 0; i < len; i++){
            const pos = arr.pop();
            check(pos[0], pos[1]);
            check(pos[0], pos[1] + 1);
            check(pos[0] + 1, pos[1]);
            check(pos[0] + 1, pos[1] + 1);
        }
        // for (let i = 0; i < rotateBoard.length; i++)
        //     rotateBoard[i] = rotateBoard[i].filter(e => e !== 0)
        rotateBoard = rotateBoard.map(e => e.filter(e => e !== 0))
    }
    
    return answer;
}