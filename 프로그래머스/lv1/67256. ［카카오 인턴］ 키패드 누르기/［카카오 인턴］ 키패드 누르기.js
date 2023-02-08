function pointToPointLength(startPoint, endPoint){
    
    // const pointToOtherPointLength = Math.sqrt(Math.pow(startPoint[0] - endPoint[0], 2) + Math.pow(startPoint[1] - endPoint[1], 2));

    // return pointToOtherPointLength;
    
    
    let lengthSum = 0;
    
    for(let i = 0; i < 2; i++){
        lengthSum += Math.abs(startPoint[i] - endPoint[i]);
    }
    
    return lengthSum;
}


function solution(numbers, hand) {
    
    let handOrderArr = [];
    
    const keyPadArr = [
                [4, 2],
        [1, 1], [1, 2], [1, 3],
        [2, 1], [2, 2], [2, 3],
        [3, 1], [3, 2], [3, 3],
        [4, 1],         [4, 3],
    ];
    
    let leftStartPoint = keyPadArr[10];
    let rightStartPoint = keyPadArr[11];
    
    for(const number of numbers){
        
        if(number % 3 == 1){
            handOrderArr.push("L");
            leftStartPoint = keyPadArr[number];
        } else if(number !== 0 && number % 3 == 0){
            handOrderArr.push("R");
            rightStartPoint = keyPadArr[number];
        } else{
            const leftHandToPoint = pointToPointLength(leftStartPoint, keyPadArr[number]);
            const rightHandToPoint = pointToPointLength(rightStartPoint, keyPadArr[number]);
            
            if(leftHandToPoint > rightHandToPoint){
                handOrderArr.push("R");
                rightStartPoint = keyPadArr[number];
                
            } else if(leftHandToPoint < rightHandToPoint){
                handOrderArr.push("L");
                leftStartPoint = keyPadArr[number];
                
            } else{
                if(hand == "right"){
                    handOrderArr.push("R");
                    rightStartPoint = keyPadArr[number];
                    
                } else{
                    handOrderArr.push("L");
                    leftStartPoint = keyPadArr[number];
                    
                }
            }
        }
    }
    
    return handOrderArr.join("");
}