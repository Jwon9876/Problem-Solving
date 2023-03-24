function solution(numbers) {
    var answer = 0;
    const sum  = numbers.reduce((a, v, i) => a + v, 0);
    console.log(Math.floor(sum / numbers.length))
    return sum / numbers.length;
}