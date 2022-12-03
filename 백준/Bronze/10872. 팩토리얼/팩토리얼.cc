//
//  main.cpp
//  BOJ_10872
//
//  Created by 최주원 on 2021/08/05.
//

#include <iostream>
#include <cstdio>

int factorial(int number){
    if(number == 0) return 1;
    else if(number == 1) return 1;
    else return number * factorial(number - 1);
}

int main(int argc, const char * argv[]) {
    // insert code here...
    int num;
    scanf("%d", &num);
    printf("%d\n", factorial(num));
}
