function solution(s) {
    var answer = '';
    var arr = s.split("")
    console.log(arr.sort().reverse())
    answer = arr.sort().reverse().reduce((a, v) => a + v)
    return answer;
}