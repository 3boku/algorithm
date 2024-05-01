function solution(array, commands) {
    var answer = [];
    let im = [];
    
    for(com of commands){
        im = array.slice(com[0] - 1, com[1]);
        im.sort((a, b) => a - b);
        let an = im.splice(com[2]-1, 1);
        answer.push(an[0]);
    }
    let ans = [];
    for(we of answer){
        ans.push(parseInt(we));
    }
    
    return ans;
}