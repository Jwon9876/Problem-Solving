function solution(n) {
    return new Array(n + 1).fill(0).reduce((a, v, i) => ((i % 2) ? (a + 0) : (a + i)), 0);
}