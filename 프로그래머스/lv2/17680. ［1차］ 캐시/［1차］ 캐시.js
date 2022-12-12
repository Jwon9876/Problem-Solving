function solution(cacheSize, cities) {
    var answer = 0;
    
    let cache = [];
    
    // LRU
    // 가장 오랫 동안 참조 되지 않은 것 삭제
    
    // 해당 배열에 값이 있는 지 없는 지 비교
    
    // 없으면 => +5, 배열의 맨 앞에 추가
    // 해당 배열이 가득 차 있으면, 맨 뒤에 요소 제거 후 맨 앞에 추가
    // 해당 배열이 가득 차 있지 않으면, 맨 앞에 요소 추가
    
    // 있으면 => +1, 배열의 맨 앞으로 이동
    
    
    // unshift -> 안쓰고 구현해야 함.
    // unshift 메서드는 배열 형태의 객체 시작점에 주어진 값을 삽입합니다.

    // unshift는 제네릭하도록 설계되었으며, 배열 형태를 가진 객체가 호출하거나 객체에 적용할 수 있습니다. 
    // length 속성을 가지지 않고, 대신 마지막 요소를 0부터 시작하는 순차적 인덱스로만 나타내는 객체에서는 의도한 것과 다르게 행동할 수 있습니다.
    
    for(let i = 0; i < cities.length; i++){
        
        let convertedCity = cities[i].toUpperCase()
        
        if(!cacheSize){
            answer += 5;
        } else if(!cache.includes(convertedCity)){
            if(cache.length == cacheSize && cache.length > 0){
                let index = cache.indexOf(convertedCity);
                // TODO
                cache.splice(0, 1);
            }
            cache.push(convertedCity);
            answer += 5;
            
        } else if(cache.includes(convertedCity)){
            let index = cache.indexOf(convertedCity);
                // TODO
            cache.splice(index, 1);
            cache.push(convertedCity);
            
            answer += 1;

        }
        
        
    }
    
    
    return answer;
}