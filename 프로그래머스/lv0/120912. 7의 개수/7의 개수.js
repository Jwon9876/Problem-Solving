function solution(array) {
    return array.join("").replaceAll(/[012345689]/g, "").length;
}