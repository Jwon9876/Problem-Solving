# Binary Search Algorithm

### 순차 탐색과 이진 탐색 차이

* 순차 탐색
  * 리스트 안에 있는 특정한 데이터를 찾기 위해 앞에서부터 하나씩 확인한다.
  * 시간 복잡도 O(N)

* 이진 탐색
  * **정렬**되어 있는 리스트에서 탐색 범위를 절반씩 좁혀가며 데이터를 탐색한다.
  * 이진 탐색을 수행할 때는 시작점(left)과 끝점(end)을 기준으로 탐색범위를 명시한다.
  * 각 단계마다 탐색 범위를 절반씩 줄이므로 시간 복잡도는 O(logN)이다.


### 이진 탐색 조건
* 변경할(최적화할) 값 x에 대하여, f(x)가 단조 증가 혹은 단조 감소.
* 즉, x<=y일 때, f(x)<=f(y) 혹은 x>=y일 때, f(x)>=f(y)를 만족하는 경우.

### 이진 탐색의 구현

* array: 탐색할 배열
* target: 찾고자 하는 값
* start: 탐색 시작점
* end: 탐색 끝점

```javascript
// 재귀함수
function binarySearch(array, target, start, end) {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (array[mid] === target) return mid;
  else if (array[mid] > target) return binarySearch(array, target, start, mid - 1);
  else return binarySearch(array, target, mid + 1, end);
}

const target = 7;
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const result = binarySearch(array, target, 0, array.length - 1);
console.log(result !== -1 ? `${result + 1}번째 원소입니다.` : '원소가 존재하지 않습니다.');
```
* 탐색의 범위를 절반씩 줄여가며, target을 찾을 때까지 재귀적으로 호출한다.

```javascript
// 반복문
function binarySearch(array, target, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (array[mid] === target) return mid;
    else if (array[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

const target = 7;
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const result = binarySearch(array, target, 0, array.length - 1);
console.log(result !== -1 ? `${result + 1}번째 원소입니다.` : '원소가 존재하지 않습니다.');
```
* 탐색의 범위를 절반씩 줄여가며, target을 찾을 때까지 반복한다.

### 이진 탐색 문제 유형의 대표적인 사례
* 억 단위 이상 탐색 범위에서 최적의 해를 찾아야 하는 경우
* **데이터를 정렬**한 뒤, 다수의 쿼리를 날려야 하는 경우

### 정렬된 배열에서 특정 원수의 개수 구하기
* 정렬된 배열에서 특정 원소를 찾거나, 특정 원소의 위치를 찾는 것이 아닌, 값이 특정 범위의 해당하는 원소의 개수를 계산하는 경우
* 이 문제를 해결하기 위해, lowerBound()와 upperBound() 함수를 사용할 수 있다.
* lowerBound(): 찾고자 하는 값 이상이 처음으로 등장하는 위치
* upperBound(): 찾고자 하는 값보다 큰 값이 처음으로 등장하는 위치
 
```javascript
// lowerBound
function lowerBound(array, target, start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (array[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

const target = 2;
const array = [1, 2, 2, 2, 3];
const result = lowerBound(array, target, 0, array.length);
console.log(result);
```

```javascript
// upperBound
function upperBound(array, target, start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (array[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}
const target = 2;
const array = [1, 2, 2, 2, 3];
const result = upperBound(array, target, 0, array.length);
console.log(result);
```

* 두 코드의 가장 큰 차이는 array[mid] >= target인지, array[mid] > target인지의 차이이다.
* lowerBound()는 찾고자 하는 값 이상이 처음으로 등장하는 위치를 찾기 위헤 array[mid] >= target을 사용한다.
* upperBound()는 찾고자 하는 값보다 큰 값이 처음으로 등장하는 위치를 찾기 위해 array[mid] > target을 사용한다.


```javascript
function countByRange(array, leftValue, rightValue) {
  const rightIndex = upperBound(array, rightValue, 0, array.length);
  const leftIndex = lowerBound(array, leftValue, 0, array.length);
  return rightIndex - leftIndex;
}

const array = [1, 1, 2, 2, 2, 2, 3];
console.log(countByRange(array, 2, 2));
console.log(countByRange(array, 1, 2));
```

* lowerBound()와 upperBound()를 이용해 배열 중 특정 범위에 속하는 데이터의 개수를 계산하는 countByRange() 함수를 구현할 수 있다.

  
  





