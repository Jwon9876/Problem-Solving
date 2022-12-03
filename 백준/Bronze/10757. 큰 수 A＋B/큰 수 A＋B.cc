//
//  main.cpp
//  BOJ_10757
//
//  Created by 최주원 on 2021/07/10.
//

#include <iostream>
#include <cstdio>
#include <cstring>
#include <string.h>
#include <stdlib.h>
#include <algorithm>

using namespace std;

int main(int argc, const char * argv[]) {
    
    string a, b;
    cin >> a >> b;
    
    string c = "";
    
    int len = a.length();
    if(b.length() > len) len = b.length();
    
    if(a.length() > b.length()){
        
        reverse(b.begin(), b.end());

        for(int i = b.length(); i < a.length(); i++ ){
            b += '0';
        }
        
        reverse(b.begin(), b.end());
    }
    
    else {
        
        reverse(a.begin(), a.end());

        for(int i = a.length(); i < b.length(); i++ ){
            a += '0';
        }
        
        reverse(a.begin(), a.end());

    }
//    cout << a << endl << b << endl;
    int carry = 0;
    
    for(int i = a.length() - 1; i >= 0; i--){
        
        int tmp = (a[i] - '0') + (b[i] - '0') + carry;
//        cout << carry << endl;
        c += ((tmp % 10) + '0');
        carry = tmp / 10;
    }
//    cout << "---------------\n";
    if (carry > 0) c += carry + '0';
    reverse(c.begin(), c.end());
    cout << c << endl;
}
