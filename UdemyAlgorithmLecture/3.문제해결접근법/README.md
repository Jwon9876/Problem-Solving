# 문제 해결 접근법

### A. 알고리즘이란?

알고리즘은 특정 작업을 달성하기 위한 과정이나 일련의 단계를 의미한다.

### B. 어떻게 해야 알고리즘은 더 잘 이해할 수 있을까?

1. 문제 해결을 위한 계획을 수립한다.

    * 문제 이해
        * 자신 만의 방식으로 질문이 무엇인지 실제로 이해
        * 어떤 입력 값을 갖고 있는가
        * 어떤 출력값이 나와야 하는가
        * 입력값이 출력값을 결정할 수 있는가
        * 문제의 일부인 데이터의 중요한 부분을 어떻게 라벨링 할 수 있는가

    * 구체적인 예시 파악
        * 간단한 예시부터 시작하기
        * 더 복잡한 예시들로 나아가기
        * 빈 입력값을 갖는 예시들을 찾기
        * 유효하지 입력값을 갖는 예시들을 찾기

    * 문제 세분화
        * 구현해야할 코드에 대한 계획의 틀을 잡기 위하 단계를 세분화함

    * 문제 해결 및 단순화
        * 내가 하려고 하는 작업에서 가장 어려운 부분을 찾기
        * 해당 어려운 부분을 일시적 무시하기
        * 단순화된 해결책 작성하기
        * 어려움을 겪었던 부분으로 돌아와서 통합하기

    * 문제 복습 및 리팩터링
        * 결과를 확인할 수 있는가
        * 다른 방식으로 결과를 도출할 수 있는가
        * 해결한 방법 외에 생각나는 다른 접근 방식이 있는가
        * 한눈에 보기에 이해할 수 있는가
        * 성능을 향상시킬 수 있는가
        * 리팩터링 하기 위한 다른 방법을 생각할 수 있는가
        * 다른 사람들은 어떤 방식으로 문제를 해결했는가

        ```js
        // not refactored
        function charCount(str){
            var obj = {}
            for(var i = 0; i < str.length; i++){
                var char = str[i].toLowerCase();
                if(/[a-z0-9]/.test(char)){
                    if (obj[char] > 0){
                        obj[char]++;
                    } else{
                        obj[char] = 1
                    }
                }
            }
            return obj
        }
        ```

        ```js
        // refactored
        function charCount(str){
            var obj = {}
            for(var char of str){
                if(isAlphaNumeric(char)){
                    char = char.toLowerCase();
                    obj[char] = ++obj[char] || 1;
                }
            }
            return obj
        }

        function isAlphaNumeric(char){
            var code = char.charCodeAt(0);
            if(
                !(code > 47 && code < 58) &&
                !(code > 64 && code < 91) &&
                !(code > 96 && code < 123)){
                    return false
            }
            return true
        }
        ```