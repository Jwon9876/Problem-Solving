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
