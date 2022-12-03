//
//  main.cpp
//  BOJ_13305
//
//  Created by 최주원 on 2021/07/28.
//

#include <iostream>
#include <cstdio>

int dist[100001];
int price[100001];
int sum = 0;

int main(int argc, const char * argv[]) {
    // insert code here...
    int iter;
    scanf("%d\n", &iter);
    
    for(int i = 1; i < iter; i++)
        scanf("%d", &dist[i]);
    
    for(int i = 1; i <= iter; i++)
        scanf("%d", &price[i]);
    
    sum = price[1] * dist[1];
    
//    printf("%d\n", sum);
    
    
    for(int i = 2; i <= iter; i++){
        if(price[i] > price[i - 1]){
            sum += price[i - 1] * dist[i];
        }
        
        else sum += price[i] * dist[i];
    }
    
    printf("%d\n", sum);
}
