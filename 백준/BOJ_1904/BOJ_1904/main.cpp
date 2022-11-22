

#include <stdio.h>

int main(){
    
    /*
     n = 1 -> 1
     n = 2 -> 2
     n = 3 -> 3
     n = 4 -> 5
     n = 5 -> 8
     */
    
    int dp[1000001];
    int mod = 15746;
    int n;
    
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    
    scanf("%d", &n);
    
    for(int i = 4; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
        dp[i] %= mod;
    }
    
    printf("%d\n", dp[n]);
    

    
}
