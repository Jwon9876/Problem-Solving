//
//  main.cpp
//  BOJ_11720
//
//  Created by 최주원 on 2021/07/09.
//

#include <iostream>
#include <cstdio>

int main(int argc, const char * argv[]) {
    // insert code here...
    char num[1001];
    int sum = 0;
    
    int iter;
    scanf("%d", &iter);
    scanf("%s", num);
    
    for(int i = 0; i < iter; i++){
        sum += (num[i] - '0');
    }
    
    printf("%d\n", sum);
    

}
