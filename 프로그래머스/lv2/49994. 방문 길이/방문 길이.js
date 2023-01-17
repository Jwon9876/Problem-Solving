function solution(dirs) {
    var answer = 0;
    
    let dimensionObj = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    }
    
    let visitedTrack = new Set();
    
    for(const dir of dirs){
        
        let startX = dimensionObj.x;
        let startY = dimensionObj.y;
        
        switch (dir){
            case "L":
                if(dimensionObj.x > -5){
                    dimensionObj.x--;
                }
                break;
            case "R":
                if(dimensionObj.x < 5){
                    dimensionObj.x++;
                }
                break;
            case "D":
                if(dimensionObj.y > -5){
                    dimensionObj.y--;
                }
                break;
            case "U":
                if(dimensionObj.y < 5){
                    dimensionObj.y++;
                }
                break;
        }
        
        let currentX = dimensionObj.x;
        let currentY = dimensionObj.y;
        if(startX !== currentX || startY !== currentY){
            visitedTrack.add(""+startX+startY+currentX+currentY)
            visitedTrack.add(""+currentX+currentY+startX+startY)
            
        }
        
        dimensionObj.startX = startX
        dimensionObj.startY = startY
        

        
    }

    
    console.log(visitedTrack);
    // console.log(visitedTrack.length);
    
    
    return visitedTrack.size / 2;
}