//
//  main.cpp
//  BOJ_10816
//
//  Created by 최주원 on 2021/07/23.
//

#include <iostream>
#include <vector>
#include <algorithm>
#include <stdlib.h>


int main(int argc, const char * argv[]) {
    // insert code here...
    using ll = long long;
    

    
    int totalSize;
    scanf("%d", &totalSize);
    std::vector<int>total(totalSize);
    
    
    
    for(int i = 0; i < totalSize; i++){
        scanf("%d", &total[i]);
    }
    
    std::sort(total.begin(), total.end());
    
    int chkIter, chkNum;
    scanf("%d", &chkIter);
    for(int i = 0; i < chkIter; i++){
        scanf("%d", &chkNum);
        int res = upper_bound(total.begin(), total.end(), chkNum)
        - lower_bound(total.begin(), total.end(), chkNum);
        printf("%d ", res);
    }
    
    
    return 0;
}
