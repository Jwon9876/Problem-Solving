//
//  main.cpp
//  백준10951
//
//  Created by 최주원 on 2020/09/16.
//  Copyright © 2020 최주원. All rights reserved.
//

#include <iostream>

using namespace std;

int main(int argc, const char * argv[]) {
    // insert code here...

    int a, b;
    
    while (1) {
        cin >> a >> b;
        if(cin.eof()==true) break;
        
        cout << a+b <<"\n";
    }
    return 0;
}
