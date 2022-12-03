

#include <stdio.h>

int main(){
    
    
    /*
     
     n = 1 -> 1
     n = 2 -> 2
     n = 3 -> 4
     n = 4 -> 7
     
     */
    
    
    
    int iter;
    int n;
    int mod = 1000000009;
    

    
    scanf("%d", &iter);
    
    while (iter > 0) {
        
        long long dp[1000001];
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 4;
        
        scanf("%d", &n);
        
        for(int i = 4; i <= n; i++){
            dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % mod;
        }
        
        printf("%lld\n", dp[n] % mod);
        
        iter--;
    }
    
    

    
}
