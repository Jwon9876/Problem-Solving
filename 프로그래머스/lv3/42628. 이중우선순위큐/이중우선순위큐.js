function solution(operations) {
    let queue = [];
    
    // splice 사용
    for(const operation of operations){
        
        let [operate, number] = operation.split(" ")
        // console.log(operate, number);
        
        if(operate == "I"){
            queue.push(parseInt(number));
        } else if(operate == "D" && number == "1" && queue.length){
            queue.splice(0, 1);
        } else if(operate == "D" && number == "-1" && queue.length){
            queue.splice(queue.length - 1, 1);
        }
        queue.sort((a, b) => b - a);
    }
    
    
    
    return !queue.length ? [0, 0] : [queue[0], queue[queue.length - 1]];
}