//
//  main.cpp
//  백준8393
//
//  Created by 최주원 on 2020/09/16.
//  Copyright © 2020 최주원. All rights reserved.
//

#include <iostream>

using namespace std;

int main(int argc, const char * argv[]) {
    // insert code here...
    
    int n, sum=0;
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        sum+=i;
    }
    
    cout << sum << "\n";
    return 0;
}
