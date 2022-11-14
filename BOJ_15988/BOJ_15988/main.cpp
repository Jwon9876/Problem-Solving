/*
 
 n = 1 -> 1
 n = 2 -> 2
 n = 3 -> 4
 n = 4 -> 7
 
 */

// Feedback
// 문제점 1. dp 자료형 int <> long long

/*
    결과값을 저장하는 배열의 자료형을 long long 으로 했을 때, 정답.
    숫자의 범위가 커서, 정답에 오버플로우가 발생하여 계속해서 오답으로 결과가 나옴.
 */

#include <stdio.h>

int main(){
    
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
//        printf("%lld\n", dp[n]);
        
        iter--;
    }
}
