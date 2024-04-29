function solution(n) {
    let countOneInBinaryN = n.toString(2).split('').filter(bit => bit === '1').length; // n을 이진수로 변환하여 1의 개수를 센다.
    
    while (true) {
        n++; // 다음 숫자로 이동
        let countOneInBinaryNext = n.toString(2).split('').filter(bit => bit === '1').length; // 다음 숫자의 이진수로 변환하여 1의 개수를 센다.
        
        if (countOneInBinaryNext === countOneInBinaryN) { // 조건에 부합하면 다음 숫자를 반환
            return n;
        }
    }
}
