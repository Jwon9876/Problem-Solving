#include <iostream>
#include <cstdio>

int main(){

    int iter, a, b;
    scanf("%d", &iter);
    
    for(int i = 1; i <= iter; i++){
            scanf("%d %d", &a, &b);
            printf("Case #%d: %d\n", i, a+b);
    }



}
