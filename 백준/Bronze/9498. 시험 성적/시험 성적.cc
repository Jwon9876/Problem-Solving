//
//  main.cpp
//  백준9498
//
//  Created by 최주원 on 2020/09/14.
//  Copyright © 2020 최주원. All rights reserved.
//

#include <iostream>


using namespace std;

int main(int argc, const char * argv[]) {
    // insert code here...

    int a;
    cin >> a;
    
    if ((90 <= a) && (a <= 100)) {
        cout << "A";
    }
    
    else if ((80 <= a) && (a < 90)) {
        cout << "B";
    }
    
    else if ((70 <= a) && (a < 80)) {
        cout << "C";
    }
    
    else if ((60 <= a) && (a < 70)) {
        cout << "D";
    }
    
    else{
        cout << "F";
    }
    return 0;
}
