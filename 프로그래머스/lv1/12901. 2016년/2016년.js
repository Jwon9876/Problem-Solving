function solution(a, b) {
    
    const dayArr = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const date = new Date(`2016-${a}-${b}`)
        
    return dayArr[date.getDay()];
}