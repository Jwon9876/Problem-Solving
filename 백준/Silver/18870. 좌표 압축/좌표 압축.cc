//
//  main.cpp
//  BOJ_18870
//
//  Created by 최주원 on 2021/07/29.
//

#include <iostream>
#include <cstdio>
#include <algorithm>
#include <set>
#include <vector>

using namespace std;

int main(int argc, const char * argv[]) {
    // insert code here...
    int size;
    long long num;
    
    vector<long long> v;

    
    scanf("%d", &size);
    
    for(int i = 0; i < size; i++){
        scanf("%lld", &num);
        v.push_back(num);
    }
    
    vector<long long> tmp(v);
    sort(tmp.begin(), tmp.end());

    
    tmp.erase(unique(tmp.begin(), tmp.end()), tmp.end());
    
    for(int i = 0; i < size; i++){
        
        auto it = lower_bound(tmp.begin() , tmp.end(), v[i]);
        printf("%ld ", it - tmp.begin());
        
    }
    printf("\n");
}
