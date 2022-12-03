//
//  main.cpp
//  BOJ_11728
//
//  Created by 최주원 on 2021/08/10.
//

#include <iostream>
#include <cstdio>
#include <vector>
#include <algorithm>

int main(int argc, const char * argv[]) {
    // insert code here...
    
    int firstVectorSize, secondVectorSize;
    scanf("%d %d", &firstVectorSize, &secondVectorSize);
    
    int resultVectorSize = firstVectorSize + secondVectorSize;
    
    std::vector<int> v1(firstVectorSize);
    std::vector<int> v2(secondVectorSize);
    std::vector<int> resultVector(resultVectorSize);
    
    
    for(int i = 0; i < firstVectorSize; i++){
        scanf("%d", &v1[i]);
    }
    
    
    for(int i = 0; i < secondVectorSize; i++){
        scanf("%d", &v2[i]);
    }
    
    
    int v1Count = 0, v2Count = 0, resultVectorCount = 0;
    while((v1Count != firstVectorSize) && (v2Count != secondVectorSize)){
        
        if(v1[v1Count] > v2[v2Count]){
            resultVector[resultVectorCount] = v2[v2Count];
            v2Count++;
        }
        
        else{
            resultVector[resultVectorCount] = v1[v1Count];
            v1Count++;
        }
        
        
        resultVectorCount++;
        
    }
    
//    printf("\n---> %d\n", resultVectorCount);
    
    if(v1Count != firstVectorSize){
        while(v1Count != firstVectorSize){
            resultVector[resultVectorCount] = v1[v1Count];
            v1Count++;
            resultVectorCount++;
        }
    }
    
    else if(v2Count != secondVectorSize){
        
            while(v2Count != secondVectorSize){
                resultVector[resultVectorCount] = v2[v2Count];
                v2Count++;
                resultVectorCount++;
            }
    }
    
    for(int i = 0; i < resultVectorSize; i++)
        printf("%d ", resultVector[i]);
    
    
}
