function solution(numbers) {
    return numbers.reduce((a, v, i) => a + v, 0) / numbers.length;
}
