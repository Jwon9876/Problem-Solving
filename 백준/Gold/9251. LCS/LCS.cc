//
//  main.cpp
//  BOJ_9251
//
//  Created by 최주원 on 2021/06/30.
//

#include <iostream>
#include <string.h>
    

using namespace std;


int main(int argc, const char * argv[]) {
    
    int chk[1001][1001] = { {0} };
    
    char first[1001];
    char second[1001];
    
    cin >> first;
    cin >> second;
    
    for(int i = 0; i < strlen(first); i++){
        
        for(int j = 0; j < strlen(second); j++){
            
            if(first[i] == second[j]){
                chk[i + 1][j + 1] = chk[i][j] + 1;
            }
            
            else{
                chk[i + 1][j + 1] = max(chk[i][j + 1], chk[i + 1][j]);
            }
        }
    }
    
    cout << chk[strlen(first)][strlen(second)] << endl;
    
//    for(int i = 0; i < 10; i++){
//        for(int j = 0; j < 10; j++){
//            cout << chk[i][j] << " ";
//        }
//        cout << endl;
//    }
    
    
    
}
