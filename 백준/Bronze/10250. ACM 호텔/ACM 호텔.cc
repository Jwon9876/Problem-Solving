//
//  main.cpp
//  BOJ_10250
//
//  Created by 최주원 on 2021/07/11.
//

#include <iostream>
#include <cstdio>

int main(int argc, const char * argv[]) {
    // insert code here...
    int iter;
    int h, w, n;
    
    scanf("%d", &iter);
    
    while(iter > 0){
        iter--;
        
        scanf("%d %d %d", &h, &w, &n);
        
        int count = 0;
        
        for(int i = 1; i <= w; i++){
            
            for(int j = 1; j <= h; j++){
                
                count++;
//                printf("%d층 %d호\n", j, i);
                if(count == n){
                    j = j * 100;
                    printf("%d\n", j + i);
                    break;
                }
            }
            
            if(count == n) break;
            
        }

    }
    
    
}
