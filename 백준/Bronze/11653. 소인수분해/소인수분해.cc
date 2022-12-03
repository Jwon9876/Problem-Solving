//
//  main.cpp
//  BOJ_11653
//
//  Created by 최주원 on 2021/07/06.
//

#include <iostream>

using namespace std;

void calculate(int num){

    for(int i = 2; i <= num; i++){
        
        if(num % i == 0) {
            printf("%d\n", i);
            calculate(num / i);
            
            if(num / i == 1) exit(0);
        }
    }
}

int main(int argc, const char * argv[]) {
    // insert code here...
    int a;
    cin >> a;
    calculate(a);
    
}
