//
//  main.cpp
//  BOJ_10809
//
//  Created by 최주원 on 2021/07/09.
//

#include <iostream>
#include <cstdio>
#include <cstring>

int main(int argc, const char * argv[]) {
    // insert code here...
    
    char str[101];
    int alpha[26];
    for(int i = 0; i < 26; i++){
        alpha[i] = -1;
    }
    scanf("%s", str);
    
    for(int i = 0; i < strlen(str); i++){
        
        if(alpha[str[i] - 'a'] == -1)   alpha[str[i] - 'a'] = i;
    }
    
    for(int i = 0; i < 26; i++){
        printf("%d ", alpha[i]);
    }
    printf("\n");
}

