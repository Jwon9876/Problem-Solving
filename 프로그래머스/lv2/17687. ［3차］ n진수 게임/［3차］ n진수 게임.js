// n: 진법
// t: 미리 구할 숫자의 갯수
// m: 게임에 참가하는 인원
// p: 튜브의 순서

function solution(n, t, m, p) {
    
    let answer = "";
    let str = "";
    
    for(let i = 0; i < 1000*100;  i++){
        str += i.toString(n);
    }
    
    
    for(let i = 0; i < t; i++){
        answer += str[(m * i + p) - 1];
    }
    
    
    return answer.toUpperCase();
}