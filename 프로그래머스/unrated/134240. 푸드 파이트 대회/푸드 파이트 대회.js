function getFoodOrderStr(index, value){
    
    let foodOrderStr = "";
    
    for(let i = 0; i < Math.floor(value / 2); i++){
        foodOrderStr += index;
    }
    
    return foodOrderStr;
}



function solution(food) {
    
    var answer = '';
    
    for(let i = 1; i < food.length; i++){
        answer += getFoodOrderStr(i, food[i]);
    }
    
    answer = answer + "0" + answer.split("").reverse().join("")
    
    return answer;
}