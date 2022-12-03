//
//  main.cpp
//  백준14681
//
//  Created by 최주원 on 2020/09/15.
//  Copyright © 2020 최주원. All rights reserved.
//

#include <iostream>


using namespace std;

int main(int argc, const char * argv[]) {
    // insert code here...
    
    int x_axis, y_axis;
    cin >> x_axis >> y_axis;
    
    if ((x_axis > 0) && (y_axis>0)) {
        cout << "1\n";
    }
    
    else if((x_axis < 0) && (y_axis>0)){
        cout << "2\n";
    }
    
    else if ((x_axis < 0) && (y_axis<0)){
        cout << "3\n";
    }
    
    else{
        cout << "4\n";
    }
    return 0;
}