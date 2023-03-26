const deleteComma = (str) => {
    if(str[str.length - 1] == ".") return deleteComma(str.split("").splice(0, str.length - 1).join(""));
    return str;
}

function solution(new_id) {
    var answer = '';
    
    // 1단계
    answer = new_id.toLowerCase();

    // 2단계
    answer = answer.replaceAll(/[^a-z\d-_.]/g, "")
    
    // 3단계
    answer = answer.replaceAll(/\.{2,}/g, ".")
 
    // 4단계
    answer = answer.replaceAll(/^\.*/g, "")
    
    // 5단계
    if(answer == "") answer += "a";
    
    // 6단계
    if(answer.length > 15) {
        answer = answer.split("").slice(0, 15).join("");
        console.log("adsdasdasdasdas")
        console.log(answer)
    }
    
    answer = deleteComma(answer)
    
    // 7단계
    while(answer.length < 3){
        answer += answer[answer.length - 1]
    }
    
    
    
    return answer;
}