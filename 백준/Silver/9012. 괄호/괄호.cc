//
//  main.cpp
//  BOJ_9012
//
//  Created by 최주원 on 2021/07/01.
//

#include <iostream>
#include <string.h>
#include <stdlib.h>
#include <cstring>

using namespace std;

int main(int argc, const char * argv[]) {
    // insert code here...
    
    int iter;
    string str;
    cin >> iter;
    
    while(iter > 0){
        cin >> str;
        
        int sum = 0;
        
        
        for(int i = 0; i < str.length(); i++){
            
            if(str[i] == '('){
                sum++;
            }
            else{
                sum--;
            }
            
            if(sum < 0){
                break;
            }
            
            if(sum > str.length() / 2){
                break;
            }
            
        }
        
        if(sum == 0){
            cout << "YES" << endl;
        }
        
        else {
            cout << "NO" << endl;
        }
        
        iter--;
    }
    


    
}
