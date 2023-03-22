function solution(cards1, cards2, goal) {
    
    cards1 = cards1.reverse();
    cards2 = cards2.reverse();
    
    for(const v of goal){
        if(v == cards1[cards1.length - 1]) cards1.pop();
        else if(v == cards2[cards2.length - 1]) cards2.pop();
        else return "No";
    }
    
    return "Yes";
    
}