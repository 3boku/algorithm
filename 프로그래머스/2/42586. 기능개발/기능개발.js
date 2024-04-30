function solution(progresses, speeds) {
    var answer = [];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index])); // 각 기능의 개발에 필요한 날짜 계산
    
    let maxDay = days[0]; // 첫 번째 기능의 개발 완료 날짜
    
    let count = 0; // 배포되는 기능의 개수
    
    for (let i = 0; i < days.length; i++) {
        if (days[i] <= maxDay) { // 현재 기능이 이전에 계산된 최대 개발 완료 날짜보다 이르게 완료되는 경우
            count++; // 배포 가능한 기능 개수 증가
        } else { // 현재 기능이 이전에 계산된 최대 개발 완료 날짜보다 늦게 완료되는 경우
            answer.push(count); // 배포 가능한 기능들을 answer 배열에 추가
            count = 1; // 새로운 배포 가능한 기능 개수 초기화
            maxDay = days[i]; // 최대 개발 완료 날짜 갱신
        }
    }
    answer.push(count); // 남은 기능들을 추가
    return answer;
}
function solution(progresses, speeds) {
    var answer = [];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index])); // 각 기능의 개발에 필요한 날짜 계산
    
    let maxDay = days[0]; // 첫 번째 기능의 개발 완료 날짜
    
    let count = 0; // 배포되는 기능의 개수
    
    for (let i = 0; i < days.length; i++) {
        if (days[i] <= maxDay) { // 현재 기능이 이전에 계산된 최대 개발 완료 날짜보다 이르게 완료되는 경우
            count++; // 배포 가능한 기능 개수 증가
        } else { // 현재 기능이 이전에 계산된 최대 개발 완료 날짜보다 늦게 완료되는 경우
            answer.push(count); // 배포 가능한 기능들을 answer 배열에 추가
            count = 1; // 새로운 배포 가능한 기능 개수 초기화
            maxDay = days[i]; // 최대 개발 완료 날짜 갱신
        }
    }
    answer.push(count); // 남은 기능들을 추가
    return answer;
}
