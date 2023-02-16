import Foundation

class counting{
    var pCount: Int;
    var yCount: Int;
    
    init(pCount: Int, yCount: Int) {
        self.pCount = 0;
        self.yCount = 0;
    }
}

func solution(_ s:String) -> Bool
{    
    var countingObj = counting(pCount: 0, yCount: 0);
    let str = s.uppercased();
    
    for v in str {
        if v == "P"{
            countingObj.pCount += 1;
        } else if v == "Y"{
            countingObj.yCount += 1;
        }
    }
        
    if countingObj.pCount == countingObj.yCount{
        return true;
    }
    
    return false;

}