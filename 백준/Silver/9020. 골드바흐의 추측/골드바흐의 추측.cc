//
//  main.cpp
//  BOJ_9020
//
//  Created by 최주원 on 2021/07/01.
//

#include <iostream>
#include <vector>

using namespace std;

vector <int> v(10000);

void isPrime(int num){

    for(int i = 2; i < v.size(); i++){
        v[i] = i;
    }
    
    for(int i = 2; i < v.size(); i++){
        
        if(v[i] == 0) continue;
        
        for(int j = i + i; j < v.size(); j = j + i){
            
            if(v[j] == 0) continue;
            
            else v[j] = 0;
            
        }
    }
}

int main(int argc, const char * argv[]) {
    // insert code here...
    
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    int iter, num;
    cin >> iter;
    
    while(iter > 0){
        iter--;
        cin >> num;

        isPrime(num);
        
        for(int i = num/2; i >= 1; i--){
                if(v[i] + v[num - i] == num) {
                    cout << v[i] << " " << v[num - i] << endl;
                    break;
                }
        }
    }
}
