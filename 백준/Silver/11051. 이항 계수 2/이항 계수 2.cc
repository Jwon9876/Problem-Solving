//
//  main.cpp
//  BOJ_11051
//
//  Created by 최주원 on 2021/07/24.
//

#include <iostream>
#include <cstdio>


int main(int argc, const char * argv[]) {
    // insert code here...
    int N, K;
    scanf("%d %d", &N, &K);

    
    if(K == 0) printf("1\n");
    
    else{
        
        int dp[1001][1001];
        
        for(int i = 0; i < 1001; i++){
            dp[i][0] = 1;
        }
        
        for(int i = 1; i < 1001; i++){
            dp[i][1] = i;
        }
        
        for(int i = 2; i <= N; i++){
            
            for(int j = 1; j <= i; j++){
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % 10007;
            }
            
            
        }
        
        
        std::cout << dp[N][K] << std::endl;
        
        
        
    }
}
