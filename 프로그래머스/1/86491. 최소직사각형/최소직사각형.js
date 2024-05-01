function solution(sizes) {
    var answer = 0;
    let temp = 0;
    let max1 = 0;
    let max2 = 0;
    
    for(size of sizes){
        if(size[0] < size[1]){
            temp = size[0]
            size[0] = size[1]
            size[1] = temp
        }
    }
    
    for(let i = 0; i < sizes.length; i++){
        let item = []
        item = sizes[i];
        
        if(max1 < item[0]) {
            max1 = item[0];
        }
        if(max2 < item[1]) {
            max2 = item[1];
        }
    }
    
    answer = max1 * max2;
    
    return answer;
}