//
//  main.cpp
//  BOJ_15552
//
//  Created by 최주원 on 2021/07/08.
//

#include <iostream>
#include <stdio.h>
#include <cstdio>


using namespace std;

int main(int argc, const char * argv[]) {

    
    cin.tie(NULL);
    ios::sync_with_stdio(false);
    
    int iter;
    cin >> iter;
    
    for(int i = 0; i < iter; i++){
        int a, b;
        cin >> a >> b;
        cout << a + b << "\n";
    }
    
    return 0;
}
