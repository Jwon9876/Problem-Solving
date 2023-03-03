function solution(skill, skillTreesArr) {
    
    let enableSkillCount = 0;
    let skillArr = skill.split("")
    let skillIndexTreesArr = [];
    
    for(let i = 0; i < skillTreesArr.length; i++){
        let tempArr = [];
        
        for(let j = 0; j < skillTreesArr[i].length; j++){
            if(skillArr.indexOf(skillTreesArr[i][j]) !== -1) tempArr.push(skillArr.indexOf(skillTreesArr[i][j]));
        }
        
        skillIndexTreesArr.push(tempArr);
    }
    
    for(let i = 0; i < skillIndexTreesArr.length; i++){
        
        let flag = true;
        
        for(let j = 0; j < skillIndexTreesArr[i].length; j++){
            if(skillIndexTreesArr[i][j] !== j){
                flag = !flag;
                break;
            }
        }
        
        if(flag) enableSkillCount++;
    }
    
    
    return enableSkillCount;
}