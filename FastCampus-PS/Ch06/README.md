# Back Tracking Algorithm

### 백트래킹이란?
* 일반적으로 그래프/트리의 모든 원소를 **완전 탐색**하기 위한 목적으로 사용할 수 있다.
* DFS와의 차이점
  * DFS는 일반적으로 **완전 탐색**의 목적으로 **재귀 함수**를 이용해 구현한다.
  * 백트래킹도 재귀 함수를 이용해 구현하는 것이 일반적이지만, 단순히 **완전 탐색**하는 것이 아니라 조건에 따라 유망한 조건의 노드로 이용하는 차이점이 있다.
* 백트래킹은 기본적으로 가능한 노드에 대하여 계속해서 재귀 함수를 호출
* 백트래킹은 모든 경우의 수를 탐색하기에 적합

### 백트래킹 예시
* N-Queens 문제
    * 백트래킹을 진행할 떄, 경우의 수를 최대한 줄여야한다.
    * 이전까지 놓았던 퀸들과 상충되지 않는 조건을 만족하는 위치에 대해서만 재귀 함수를 호출
        * 재귀 함수를 통해 모든 경우의 수를 다 찾은 뒤에, 각 경우마다 가능한지 검사
        * 유망한 경우에 대해서만 재귀 함수를 호출하는 방법
        * 이 경우, 두번째의 방법이 더 많은 경우의 수를 줄일 수 있다.
    * N-Queens 문제를 해결하기 위해서는 특정 위치의 가능 여부를 판단할 필요가 있다.
        * 같은 행에 있는지 / 같은 열에 있는지
        * 대각선에 있는지
    
```javascript
    const n = 8;
    let board = [];
	
	function possible(x, y){
		for (let [a, b] of board){
			if(a == x || b == y || Math.abs(a - x) == Math.abs(b - y)){
                return false;
            }
		}
		return true;
    }
	let cnt = 0;
	function dfs(row){
		if(row == n) cnt++;
		for(let i = 0; i < n; i++){
			if(!possible(row, i)) continue;
			board.push([row, i]);
			dfs(row + 1);
			board.pop();
		}
    }
	dfs(0);
	console.log(cnt);
```


### 백트래킹의 기본 형태

```
function recursive(){
    if 종료 조건을 만족{
        처리
    }
    for 자식 노드를 하나씩 확인하먀{
        if 임의의 조건을 만족한다면{
            자식 노드 방문 처리
            재귀 함수 호출
            자식 노드 방문 처리 해제
        }
    }
}
```
