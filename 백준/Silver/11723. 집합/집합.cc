//
//  main.cpp
//  BOJ_11723
//
//  Created by 최주원 on 2022/01/30.
//

#include <iostream>
#include <cstdio>
#include <cstring>

using namespace std;


void isFalse(bool mask[], int num){
    if(mask[num]){
        printf("%d\n", 1);
        return;
    }
    printf("%d\n", 0);
}

int main() {
    
    unsigned int iter;
    
    bool mask[21] = {false, };
    
    char statement[21];
    int num;
    
    scanf("%d", &iter);
    
    for(int i = 1; i <= iter; i++){
        scanf("%s", statement);
        if(strcmp(statement, "add") == 0){
            scanf("%d", &num);
            mask[num] = true;
        }
        else if(strcmp(statement, "remove") == 0){
            scanf("%d", &num);
            mask[num] = false;
        }
        else if(strcmp(statement, "check") == 0){
            scanf("%d", &num);
            isFalse(mask, num);
        }
        else if(strcmp(statement, "toggle") == 0){
            scanf("%d", &num);
            mask[num] = !mask[num];
        }
        else if(strcmp(statement, "all") == 0){
            for(int i = 1; i <= 21; i++){
                mask[i] = true;
            }
        }
        else if(strcmp(statement, "empty") == 0){
            for(int i = 1; i <= 21; i++){
                mask[i] = false;
            }
        }
    }
}
