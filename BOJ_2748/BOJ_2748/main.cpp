
#include <stdio.h>

int main(){
    
    
    unsigned long dp[91] = {0, };
    
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    
    for (int i = 3; i < 91; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    int n;
    scanf("%d", &n);
    
    printf("%ld\n", dp[n]);
}
