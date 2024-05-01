function solution(s) {
    var answer = '';
    let word = '';
    
    for(let i = 0; i < s.length; i++){
        if(isNaN(s[i])) {
            word+=`${s[i]}`;
            if(word === "one"){
                answer+="1";
                word = '';
            } else if(word === "two"){
                answer+="2";
                word = '';
            } else if(word === "zero"){
                answer+="0";
                word = '';
            } else if(word === "three"){
                answer+="3";
                word = '';
            } else if(word === "four"){
                answer+="4";
                word = '';
            } else if(word === "five"){
                answer+="5";
                word = '';
            } else if(word === "six"){
                answer+="6";
                word = '';
            } else if(word === "seven"){
                answer+="7";
                word = '';
            } else if(word === "eight"){
                answer+="8";
                word = '';
            } else if(word === "nine"){
                answer+="9";
                word = '';
            }
        } else{
            console.log(word);
            answer+=`${s[i]}`;
        }
    }
    return parseInt(answer);
}