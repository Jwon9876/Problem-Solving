//
//  main.cpp
//  BOJ_9613
//
//  Created by 최주원 on 2021/08/03.
//

#include <iostream>
#include <cstdio>

typedef struct{
    int number;
}gcdNumber;


long long int gcd(int a, int b){
    
    if(b == 0) return a;
    else if(b > a) return gcd(b, a);
    else return gcd(b, a%b);
}

void gcdInitAndResult(int iter){
    
    gcdNumber numArr[iter];
    long long int sum = 0;
    for(int i = 0; i < iter; i++)
        scanf("%d", &numArr[i].number);
    
    for(int i = 0; i < iter - 1; i++){
        for(int j = i + 1; j < iter; j++){
            sum += gcd(numArr[i].number, numArr[j].number);
        }
    }
    printf("%lld\n", sum);
}

int main(int argc, const char * argv[]) {
    // insert code here...
    
    int iter, func_iter;
    scanf("%d", &iter);
    for(int i = 0; i < iter; i++){
        scanf("%d", &func_iter);
        gcdInitAndResult(func_iter);
    }
    
//    int a, b;
//    scanf("%d %d", &a, &b);
//    printf("%d\n", gcd(a, b));
    
}
