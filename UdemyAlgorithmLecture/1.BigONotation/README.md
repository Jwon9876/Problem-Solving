# Big O Notation

### A. 성능평가

* `Exmaple: 1 ~ n 까지의 합`

```js
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
// Time Elapsed: 0.9547567499876022 seconds.
```

```js
function addUpToUsingMath(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpToUsingMath(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)
// Time Elapsed: 0.000009499907493591309 seconds.
```

위 2개의 예시 코드를 통해 두번째 예시 코드의 속도가 더 빠르다는 것을 확인할 수 있다.

하지만, 실행 결과과 같으며 실행 시간이 1시간이 걸리는 코드와 4시간이 걸리는 코드가 있다. <br/>
어떤 코드가 실행 시간이 더 짧은 지 모르고 있다고 가정해보자.

두 코드 중 어떤 것이 더 성능이 좋은 지 확인하기 위해서는 최소 1시간이라는 시간을 소비해야만 한다.

시간의 수고로움을 덜기 위해 성능 평가를 위한 방법이 필요하다.

<br/>

### B. What is Big O Notation?

```
기능을 구현함에 있어, 수 많은 구현 방법들이 존재한다.
그 수 많은 구현 방법들을 Big O Notation을 통해 비교하고 성능을 평가하는 방법이다.

Big O Notation은 입력이 늘어날 수록 알고리즘 실행 시간이 어떻게 변화하는지를 설명하는 공식이다.
즉, Big O Notation은 입력의 크기와 실행시간의 관계를 말하며, 오직 전반적인 추세에 주목한다.
일반적으로 가장 높은 실행 시간 값들을 의미한다(시간 복잡도).
```

```js
function addUpToUsingMath(n) {
  return n * (n + 1) / 2;
}
// -> O(n)
```

```js
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
// -> O(n)
```

```js
function printAllPairs(n){
    for (let i = 0; i < n; i++){
    // O(n)
        for(let j = 0; j < n; j++){
            console.log(i, j)
        }
        // O(n)
    }
}
// -> O(n^2)
```
