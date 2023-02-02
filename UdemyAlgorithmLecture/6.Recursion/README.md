# 재귀(Recursion)

### A. 재귀 함수를 사용하는 이유

* 재귀란, 자기자신을 호출하는 절차(함수)이다.

* JSON.parse / JSON.stringify / document.getElementById 
/ DOM 순회 알고리즘 / 객체 순회 등 다양한 곳에서 재귀적인 동작을 하고 있고 그 작동 원리를 알 필요가 있다.

* 재귀로 더 깔끔한 코드를 만들어 낼 수 있다.

### B. Call Stack

```js
// Call Stack Example
function takeShower(){
    return "Showering!";
}

function eatBreakfast(){
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("Ok ready to go to work!");
}

wakeUp(); // breakpoint
```

### C. 재귀 함수

1. 계속해서 자기 자신을 호출하지만, 다른 입력값이 주어져야 한다. (Different Input)

2. 종료 조건을 반드시 가져야 한다. (Base Case)

### D. 재귀 함수 예

```js
function countDownUsingRecursion(num){
    if(num <= 0){
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDownUsingRecursion(5);


function countDownUsingLoop(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}

countDownUsingLoop(5);
```

```js
function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

sumRange(4);
```

```js
function factorialUsingLoop(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

function factorialUsingRecursion(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}
```

### E. 재귀 함수의 잠재적 위험성

* No Base Case

* 잘못된 반환값을 전달하거나, 반환값을 전달하지 않는 경우

* Stack Overflow


### F. Helper Method Recursion

* 재귀적이지 않은 외부 함수가 재귀적인 내부 함수를 사용하는 패턴

```js
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }
        
        helper(helperInput.slice(1));
    }
    
    helper(arr);

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);
```

### G. 순수 재귀

* Helper Method Recursion와 같이 외부 데이터 구조를 사용하지 않고, 필요한 모든 코드가 함수 자체에 포함되며, 재귀적이으로 동작한다.

* 배열을 사용하고 싶은 경우에, Javascript 내장 함수를 사용하여 배열을 변경하지 않고
순수 재귀 함수를 만들 수 있다.

```js
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    // tempArr = [1,2,3,4,5] 
    // tempArr.slice(1) -> [2,3,4,5]
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
} 

collectOddValues([1,2,3,4,5]);
```