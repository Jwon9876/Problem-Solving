//
//  main.cpp
//  BOJ_7568
//
//  Created by 최주원 on 2021/07/05.
//

#include <iostream>
#include <vector>

using namespace std;


typedef struct info{
    
    int weight, height;
    
}info;


int main(int argc, const char * argv[]) {
    // insert code here...


    int size;
    cin >> size;
    
    vector <info> arr(size + 1);
    
    for(int i = 1; i <= size; i++){
        cin >> arr[i].weight >> arr[i].height;
    }
    
    for(int i = 1; i <= size; i++){
        
        int grade = 1;
        
        for(int j = 1; j <= size; j++){
            
            if(i != j){
                
                if((arr[j].height > arr[i].height) && (arr[j].weight > arr[i].weight)){
                    grade ++;
                }
                
                
            }
            
        }
        cout << grade << " ";
    }
    cout << endl;
    
}
