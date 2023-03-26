const solution = (newId) => {
    
    const deleteComma = (answer) => {
        if(answer[answer.length - 1] == ".") return deleteComma(answer.split("").splice(0, answer.length - 1).join(""));
        return answer;
    }
    
    let answer = '';
    
    // 1 - 4단계
    answer = newId.toLowerCase().replaceAll(/[^a-z\d-_.]/g, "").replaceAll(/\.{2,}/g, ".").replaceAll(/^\.*/g, "");
    
    // 5단계
    if(answer == "") answer += "a";
    
    // 6단계
    if(answer.length > 15) answer = answer.split("").slice(0, 15).join("");
    answer = deleteComma(answer);
    
    // 7단계
    while(answer.length < 3){
        answer += answer[answer.length - 1];
    }
    
    return answer;
}
