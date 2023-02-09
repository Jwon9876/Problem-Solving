function solution(angle) {
        
    if((0 < angle && angle < 90) || ((90 < angle && angle < 180))){
        return (parseInt(angle / 90) * 2) + 1;
    } else{
        return (angle / 90) * 2;
    }
    
}