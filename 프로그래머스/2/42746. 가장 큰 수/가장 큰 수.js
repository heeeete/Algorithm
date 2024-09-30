function solution(numbers) {
    numbers = numbers.map(e => String(e))
    numbers.sort((a,b) => {
        let [aa,bb] = [a+b, b+ a];
        return Number(bb) - Number(aa)
    })
    let answer = (numbers.join(''))
    return answer[0] === '0' ? '0' : answer
}