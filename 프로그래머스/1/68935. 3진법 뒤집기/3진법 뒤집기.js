function solution(n) {
    // 3진법으로 변환
    let ternary = '';
    while (n > 0) {
        ternary = (n % 3) + ternary;
        n = Math.floor(n / 3);
    }
    
    // 3진법을 뒤집어서 다시 10진법으로 변환
    let reversedTernary = parseInt(ternary.split('').reverse().join(''), 3);
    
    return reversedTernary;
}