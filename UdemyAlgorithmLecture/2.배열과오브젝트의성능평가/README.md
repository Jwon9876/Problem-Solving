# 배열과 오브젝트의 성능 평가

### A. 오브젝트를 사용하는 경우

* 정렬이 필요하지 않을 때
* 빠른 접근/삽입/제거가 필요할 때


```js
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumber: [1, 2, 3, 4]
}

console.log(Object.keys(instructor))
console.log(Object.values(instructor))
console.log(Object.entries(instructor))
console.log(instructor.hasOwnProperty("firstName"))
```

### `오브젝트의 Big O`
* 삽입 - O(1)
* 삭제 - O(1)
* 검색 - O(N)
* 접근 - O(1)

삽입, 삭제, 접근은 오브젝트의 `key`를 사용하기에, 상수 시간만을 필요로 한다.

검색을 `key`를 사용하는 것이 아닌 특정한 값을 찾기에 O(N)의 시간이 필요하다.

<br/>

### `오브젝트 메서드의 Big O`
* Object.keys - O(N)
* Object.values - O(N)
* Object.entries - O(N)
* hasOwnProperty - O(1)


### B. 배열 안의 데이터 접근이 느린 이유

### 배열을 사용하는 경우

* 정렬된 결과가 필요로 할 때
* 빠른 접근/삽입/삭제를 필요로 할 때

### `배열의 Big O`
* 삽입/삭제 - 어떤 위치에 삽입하는 지에 결과가 달려있음.
    
    `삽입할 element를 배열의 끝에 추가하는 경우 상수 시간이지만,`
    
    `배열의 가장 앞에 추가하기 위해서는 모든 인덱스를 새로 배정해야만 한다.`

    `삭제의 경우도 마찬가지로 가장 앞의 element를 제거하게 되면 모든 나머지 element의`

    `인덱스를 새로 배정해야만 한다.`
* 검색 - O(N)
* 접근 - O(1)


### `배열 메서드의 Big O`

* push O(1)
* pop O(1)
* shift O(N)
* unshift O(N)
* concat O(N)
* slice O(N)
* splice O(N)
* sort O(N * log N)
* forEach/map/filter/reduce/etc... O(N)