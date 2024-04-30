function solution(s, n) {
    var answer = '';
    let str = [];
    str = s.split("")
    
    for(let i = 0; i < str.length; i++){
        let code = 0;
        for(let j = 0; j< n; j++){
            if(str[i] !== " "){
                if(str[i] === 'z'){
                    str[i] = 'a';
                } else if(str[i] === 'Z'){
                    str[i] = 'A';
                } else{
                    code = str[i].charCodeAt()+1;
                    str[i] = String.fromCharCode(code)
                }
            }
        }
        
        
    }
    answer = str.join("");
    return answer;
}