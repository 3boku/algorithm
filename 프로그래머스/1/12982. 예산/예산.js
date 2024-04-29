function solution(d, budget) {
    let answer = 0;
    // 부서별로 신청한 금액을 오름차순으로 정렬
    d.sort((a, b) => a - b);
    
    // 예산 내에서 가능한 부서의 수 계산
    for (let i = 0; i < d.length; i++) {
        // 현재 부서의 신청 금액이 예산보다 작거나 같으면 부서 지원
        if (budget - d[i] >= 0) {
            budget -= d[i];
            answer++;
        } else {
            // 예산이 부족하면 반복 종료
            break;
        }
    }
    
    return answer;
}