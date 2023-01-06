function solution(array, n) { 
    const answerArr = array.filter((v) => v == n);
    return answerArr.length;
}