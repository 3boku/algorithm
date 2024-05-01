function solution(food) {
    var answer = '';
    let fp = []; // 첫번째 사람이 먹을 음식
    let sp = []; // 두번째 사람이 먹을 음식
    
    for(let i = 1; i < food.length; i++){
        if(food[i] !== 1){
            for(let j = 0; j < Math.floor(food[i]/2); j++){
                fp.push(i)    
            }
        }
        
    }
    sp = fp;
    answer += fp.join("");
    answer += '0';
    sp.reverse()
    answer += sp.join("");
    
    return answer;
}