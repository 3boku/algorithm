function solution(phone_book) {
    var answer = true;
    phone_book.sort(); // 전화번호를 사전순으로 정렬하여 순차적으로 비교하기 위해 정렬합니다.
    
    for(let i = 0; i < phone_book.length - 1; i++){
        // 현재 전화번호와 그 다음 번호를 비교하여 접두어 관계인지 확인합니다.
        if(phone_book[i + 1].startsWith(phone_book[i])){
            answer = false; // 접두어인 경우 false로 설정하고 반복문을 종료합니다.
            break;
        }
    }
    return answer;
}