//
//  main.cpp
//  BOJ_5622
//
//  Created by 최주원 on 2021/07/09.
//

#include <iostream>
#include <cstdio>
#include <array>
#include <cstring>

using namespace std;

int main(int argc, const char * argv[]) {
    // insert code here...
    
    
    int sum = 0;
    //65 -> 90
    char strDial[15];
    scanf("%s", strDial);
    
    for(int i = 0; i < strlen(strDial); i++){
        
        if((65 <= strDial[i]) && (strDial[i] <= 67))
            sum += 2;
        else if((68 <= strDial[i]) && (strDial[i] <= 70))
            sum += 3;
        else if((71 <= strDial[i]) && (strDial[i] <= 73))
            sum += 4;
        else if((74 <= strDial[i]) && (strDial[i] <= 76))
            sum += 5;
        else if((77 <= strDial[i]) && (strDial[i] <= 79))
            sum += 6;
        else if((80 <= strDial[i]) && (strDial[i] <= 83))
            sum += 7;
        else if((84 <= strDial[i]) && (strDial[i] <= 86))
            sum += 8;
        else if((87 <= strDial[i]) && (strDial[i] <= 90))
            sum += 9;
    }
    
    printf("%lu\n", sum + strlen(strDial));
    
    
}
