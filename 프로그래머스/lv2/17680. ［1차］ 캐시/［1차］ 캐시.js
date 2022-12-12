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
    
    for(let i = 0; i < cities.length; i++){
        
        let convertedCity = cities[i].toUpperCase();
        
        if(!cacheSize){
            answer += 5;
        } else if(!cache.includes(convertedCity)){
            if(cache.length == cacheSize && cache.length > 0){
                cache.splice(0, 1);
            }
            cache.push(convertedCity);
            answer += 5;
            
        } else if(cache.includes(convertedCity)){
            let index = cache.indexOf(convertedCity);
            cache.splice(index, 1);
            cache.push(convertedCity);
            answer += 1;
        }
        
    }
    
    
    return answer;
}