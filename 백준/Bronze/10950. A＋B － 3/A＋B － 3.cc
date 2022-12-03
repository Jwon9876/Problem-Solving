//
//  main.cpp
//  백준10950
//
//  Created by 최주원 on 2020/09/15.
//  Copyright © 2020 최주원. All rights reserved.
//

#include <iostream>

using namespace std;


int main(int argc, const char * argv[]) {
    // insert code here...
    
    int count =0;
    int a,b;
    
    cin >> count;
    
    for (int i=0; count > i; i++) {
        cin >> a >> b;
        cout << a+b << "\n";
    }
    return 0;
}

