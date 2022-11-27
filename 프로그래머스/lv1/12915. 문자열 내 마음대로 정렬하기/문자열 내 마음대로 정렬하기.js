function solution(strings, n) {
    
    strings.sort(
        (a, b) => {
            if(a[n].charCodeAt() > b[n].charCodeAt()) return 1;
            else if(a[n].charCodeAt() == b[n].charCodeAt()) return (a > b) ? (1) : (-1);
            else return -1;
        }   
    )
    
    return strings;
}
