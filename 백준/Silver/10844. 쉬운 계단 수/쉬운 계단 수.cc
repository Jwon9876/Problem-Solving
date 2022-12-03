//
//  main.cpp
//  BOJ_10844
//
//  Created by 최주원 on 2021/08/26.
//

#include <iostream>
#include <cstdio>
#define mod 1000000000


int dp[101][10];

int main(int argc, const char * argv[]) {
    // insert code here...
    
    int size;
    scanf("%d", &size);
    
    for(int i = 1; i < 10; i++){
        dp[1][i] = 1;
    }
    
    
    
    for(int i = 2; i <= size; i++){
        for(int j = 0; j < 10; j++){
            
            if(j == 0){
                dp[i][j] = (dp[i - 1][j + 1]) % mod;
            }
            
            else if (j == 9){
                dp[i][j] = (dp[i - 1][j - 1]) % mod;
            }
            
            else{
                dp[i][j] = (dp[i - 1][j + 1] + dp[i - 1][j - 1]) % mod;
            }
        }
    }
    
    int sum = 0;
    
    for(int i = 0; i < 10; i++){
        sum = (sum + dp[size][i]) % mod;
    }
    
    printf("%d\n", sum);
}
