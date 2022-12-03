//
//  main.cpp
//  BOJ_9095
//
//  Created by 최주원 on 2021/08/14.
//

#include <iostream>
#include <cstdio>

int main(int argc, const char * argv[]) {
    // insert code here...
    int dp[12];
    
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    
    for(int i = 4; i < 12; i++)
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    
    int iter, index;
    scanf("%d", &iter);
    
    while(iter > 0){
        scanf("%d", &index);
        printf("%d\n", dp[index]);
        iter--;
    }
    
}
