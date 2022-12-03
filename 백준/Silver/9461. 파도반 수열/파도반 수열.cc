//
//  main.cpp
//  BOJ_9461
//
//  Created by 최주원 on 2021/09/05.
//

#include <iostream>
#include <cstdio>

long long dp[101] = { 0, };

int start = 1;

void initiate(){
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 2;
    dp[5] = 2;
    dp[6] = 3;
    dp[7] = 4;
    dp[8] = 5;
    dp[9] = 7;
    dp[10] = 9;
}


void solve(int index){
    
    if(index < 11){
        start = index;
        printf("%lld\n", dp[index]);
    }

    
    else{
        for(int i = 11; i <= index; i++){
            dp[i] = dp[i - 2] + dp[i - 3];
        }
        printf("%lld\n", dp[index]);
    }
    
    
    
}

int main(int argc, const char * argv[]) {
    // insert code here...
    
    initiate();

    
//    for(int i = 11; i < 101; i++){
//        dp[i] = dp[i - 2] + dp[i - 3];
//        printf("id's %d : %lld\n", i, dp[i]);
//    }
    
    int num, iter;
    scanf("%d", &iter);
    while(iter > 0){
        iter--;
        scanf("%d", &num);
        solve(num);
    }
}
