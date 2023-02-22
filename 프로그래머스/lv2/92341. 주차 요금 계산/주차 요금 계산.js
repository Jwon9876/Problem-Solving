function getAccumlatedTime(splitPreviousTimeArr, splitCurrentTimeArr){
    
    let previousH = parseInt(splitPreviousTimeArr[0]) * 60;
    let previousM = parseInt(splitPreviousTimeArr[1]);
    
    let currentH = parseInt(splitCurrentTimeArr[0]) * 60;
    let currentM = parseInt(splitCurrentTimeArr[1]);
    
    let currentAccumlatedTime = (currentH + currentM) - (previousH + previousM);
    
    return currentAccumlatedTime;
}


function solution(fees, records) {
    var answer = [];
    
    let [defaultMins, defaultPrice, AdditionalMins, AdditionalPrice] = fees
    
    
    let recordsObj = {};
    
    for(const v of records){
        let [time, carNum, status] = v.split(" ");
        if(!recordsObj[carNum]){
            // 아직 등록된 기록이 없으면
            recordsObj[carNum] = [time, status, 0]        
        } else if(recordsObj[carNum] && status == "OUT"){
            // 등록된 기록이 있고, 출차이면
            
            
            let splitPreviousTimeArr = recordsObj[carNum][0].split(":");    
            let splitCurrentTimeArr = time.split(":");
            
            let previousAccumlatedTime = recordsObj[carNum][2];
            let currentAccumlatedTime = getAccumlatedTime(splitPreviousTimeArr, splitCurrentTimeArr) + previousAccumlatedTime

            recordsObj[carNum] = [time, status, currentAccumlatedTime];
        } else{
            // 등록된 기록이 있고, 입차이면
            let previousAccumlatedTime = recordsObj[carNum][2];
            recordsObj[carNum] = [time, status, previousAccumlatedTime];   
        }
        
        
    }
    
    // 아직 상태가 IN인 경우 23:59에서 입차시간 빼서 누적 시간 계산
    
    
    console.log(defaultMins, defaultPrice, AdditionalMins, AdditionalPrice)
    for(const key in recordsObj){
        
        if(recordsObj[key][1] == "IN"){
            let splitPreviousTimeArr = recordsObj[key][0].split(":");    
            let splitCurrentTimeArr = ["23", "59"];
            
            let previousAccumlatedTime = recordsObj[key][2];
            let currentAccumlatedTime = getAccumlatedTime(splitPreviousTimeArr, splitCurrentTimeArr) + previousAccumlatedTime
            
            if(currentAccumlatedTime <= defaultMins){
                recordsObj[key] = ["23:59", "OUT", currentAccumlatedTime, defaultPrice]; 
            } else{
                let price = defaultPrice + Math.ceil((currentAccumlatedTime - defaultMins) / AdditionalMins) * AdditionalPrice;
                recordsObj[key] = ["23:59", "OUT", currentAccumlatedTime, price]; 
            }  
        } else if (recordsObj[key][1] == "OUT"){
            
            
            let currentTime = recordsObj[key][0];
            let currentStatus = recordsObj[key][1];
            let currentAccumlatedTime = recordsObj[key][2];
            
            if(currentAccumlatedTime <= defaultMins){
                recordsObj[key] = [currentTime, currentStatus, currentAccumlatedTime, defaultPrice]; 
            } else{
                let price = defaultPrice + Math.ceil((currentAccumlatedTime - defaultMins) / AdditionalMins) * AdditionalPrice;
                recordsObj[key] = [currentTime, currentStatus, currentAccumlatedTime, price]; 
            }  
        }
        
    }
    
   const sortedKey =  Object.keys(recordsObj).sort()
    
    for(const key of sortedKey){
        answer.push(recordsObj[key][3])
    }

    return answer;
}