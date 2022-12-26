
function addUpToUsingLoop(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

var t1 = performance.now();
addUpToUsingLoop(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)



function addUpToUsingMath(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpToUsingMath(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)



function countUpAndDown(n){
    console.log("Going Up");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    // O(n)
    console.log("At the top! \n Going Down");
    for (let j = n; j >= 0 ; j--) {
        console.log(j);
    }
    // O(n)
    console.log("Back down. Bye");
}

function printAllPairs(n){
    for (let i = 0; i < n; i++){
    // O(n)
        for(let j = 0; j < n; j++){
            console.log(i, j)
        }
        // O(n)
    }
}




countUpAndDown(10)