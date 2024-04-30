function solution(number) {
    var answer = 0;
    
    number.sort((a, b) => a - b)
    
    for(let i = 0; i < number.length; i++){
        for(let j = i+1; j < number.length; j++){
            for(let t = j+1; t < number.length; t++){
                 if(number[t] + number[j] + number[i] === 0){
                     answer++;
                 }
            } 
        }
    }
    return answer;
}