//
//  main.cpp
//  BOJ_14501
//
//  Created by 최주원 on 2021/08/26.
//

#include <iostream>
#include <cstdio>
#include <math.h>

int main(int argc, const char * argv[]) {
    // insert code here...
    int size;
    scanf("%d", &size);
    
    int *T = new int [size + 1];
    int *P = new int [size + 1];
    int *dp = new int [size + 1];
    
    for(int i = 1; i <= size; i++) {
        scanf("%d %d", &T[i], &P[i]);
        dp[i] = P[i];
    }
    
    
    for(int i = 2; i <= size; i++){
        
        for(int j = 1; j < i; j++){
            
            if (i - j >= T[j]) {
                dp[i] = std::max(P[i] + dp[j], dp[i]);
            }
        }
  
    }
    
    
    
    int max = 0;
    
    for(int i = 1; i <= size; i++){
        
        if((i + T[i] <= size + 1) && (max < dp[i])){
            max = dp[i];
        }
    }
    
    printf("%d\n", max);
}
