# Big O Notation

### A. What is Big O Notation?

```
기능을 구현함에 있어, 수 많은 구현 방법들이 존재한다.
그 수 많은 구현 방법들을 Big O Notation을 통해 비교하고 성능을 평가하는 방법이다.
```

* `Exmaple: 1 ~ n 까지의 합`

```javascript
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

```javascript
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

최소 1시간이라는 시간의 수고로움을 덜기 위해, 이럴 때 Big O Notation을 사용하여 비교한다.

<br/>

### B. Big O Notation

개발 환경, 장비간 성능 차이로 단순히 시간을 비교하는 것은 의미가 없을 수도 있다. <br/>
실행 시간을 비교하기보다 컴퓨터가 처리해야하는 연산 갯수를 계산하면, 보다 더 효율적인 성능 평가를 할 수 있을 것이다.

```
첫 번째 예시 코드: O(5n + 2) -> O(n)
두 번째 예시 코드: O(3)

```



