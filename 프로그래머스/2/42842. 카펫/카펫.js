function solution(brown, yellow) {
    var answer = [];
    
    // 갈색 격자와 노란색 격자의 수를 이용하여 카펫의 가로와 세로 크기를 구함
    for(let i = 1; i <= yellow; i++) {
        if(yellow % i === 0) {
            let yellowCol = i; // 노란색 격자의 세로 길이
            let yellowRow = yellow / i; // 노란색 격자의 가로 길이
            
            if((yellowCol + 2) * (yellowRow + 2) === brown + yellow) {
                answer = [yellowRow + 2, yellowCol + 2];
                break;
            }
        }
    }
    
    return answer;
}