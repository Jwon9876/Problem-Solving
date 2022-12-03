//
//  main.cpp
//  BOJ_11866
//
//  Created by 최주원 on 2021/07/24.
//

//  input : 7 3
//  1 2 3 4 5 6 7
//
//  >> 1 2 4 5 6 7
//  >> 1 2 4 5 7
//  >> 1 4 5 7
//  >> 1 4 5
//  >> 1 4
//  >> 4


#include <iostream>
#include <cstdio>
#include <vector>
#include <queue>

using namespace std;

int main(int argc, const char * argv[]) {
    // insert code here...
    
    int size, order;
    
    scanf("%d %d", &size, &order);
    
    vector<int> vec;
    queue<int> q;
    
    for(int i = 0; i < size; i++) vec.push_back(i + 1);
    
    
    vector<int>::iterator it;
    it = vec.begin();

    while(vec.size() != 0){

        for(int i = 1; i < order; i++){

            if(it == (vec.end() - 1)){
                it = vec.begin();
            }

            else{
                it++;
            }
        }
        
//        cout << "---->" << *it << endl;
        q.push(*it);
        vec.erase(it);
        if (it == vec.end()) it = vec.begin();
    }
    
    cout << "<" ;
    while(!q.empty()){
        
        if(q.size() == 1){
            cout << q.front() << ">" << endl;
            q.pop();
        }
        
        else{
            cout << q.front() << ", ";
            q.pop();
        }

    }

}
