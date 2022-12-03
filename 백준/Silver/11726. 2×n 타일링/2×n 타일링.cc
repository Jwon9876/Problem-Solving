//
//  main.cpp
//  BOJ_11726
//
//  Created by 최주원 on 2021/08/17.
//

#include <iostream>
#include <cstdio>

int dp[1001];

int main(int argc, const char * argv[]) {
    // insert code here...
    
    dp[1] = 1;
    dp[2] = 2;
    
    int index;
    scanf("%d", &index);
    
    for(int i = 3; i <= index; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
        dp[i] %= 10007;
    }
    
    printf("%d\n", dp[index]);
    
}
