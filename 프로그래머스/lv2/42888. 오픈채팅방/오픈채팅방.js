function solution(record) {
    
    
    
    var logs = [];
    var stringLogs = [];
    
    let userInfo = {};
    
    for(const row of record){
        
        let column = row.split(" ");
        
        if(column[0] == "Enter"){
            logs.push([column[0], column[1]]);
            userInfo[column[1]] = column[2];
        } else if(column[0] == "Change"){
            userInfo[column[1]] = column[2];
        } else{
            logs.push([column[0], column[1]]);
        }
    }
    
    for(const log of logs){
        
        if(log[0] == "Enter"){
            stringLogs.push(`${userInfo[log[1]]}님이 들어왔습니다.`);
        } else{
            stringLogs.push(`${userInfo[log[1]]}님이 나갔습니다.`);
        }
    }
    
    
    return stringLogs;
}