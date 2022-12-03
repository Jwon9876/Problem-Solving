//
//  main.cpp
//  BOJ_11022
//
//  Created by 최주원 on 2021/06/30.
//

#include <iostream>
#include <stdio.h>

typedef struct res{
    
    int x, y;
    
}res;

using namespace std;


int main(int argc, const char * argv[]) {

    int size;
    scanf("%d", &size);
    
    res *arr = new res[size + 1];
    
    for(int i = 1; i <= size; i++){
        scanf("%d %d", &arr[i].x, &arr[i].y);
    }
    
    for(int i = 1; i <= size; i++){
        printf("Case #%d: %d + %d = %d\n", i, arr[i].x, arr[i].y, arr[i].x + arr[i].y);
    }
    
    
}
