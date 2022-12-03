//
//  main.cpp
//  백준 11050
//
//  Created by 최주원 on 2021/04/21.
//

#include <iostream>


using namespace std;




int factorial(int a){
    
    
    if(a == 0) return  1;
    
    else if(a == 1) return a;
    
    else{
        return a * factorial(a - 1);
    }
    
    
    
    
}

int main(int argc, const char * argv[]) {
    // insert code here...
    
    
    int n, k, a, b, c;
    cin >> n >> k;
    
    a = factorial(n);
    b = factorial(k);
    c = factorial(n-k);
    
    cout << a / (b * c) << endl;
    
    
    
}
