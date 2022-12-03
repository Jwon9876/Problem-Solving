//
//  main.cpp
//  백준10871
//
//  Created by 최주원 on 2020/09/16.
//  Copyright © 2020 최주원. All rights reserved.
//

#include <iostream>


using namespace std;

int main(int argc, const char * argv[]) {
    // insert code here...

    int n, x;
    scanf("%d\n%d",&n, &x);
    int input_num;
    
    
    for (int i = 0; i < n ; i++) {
        scanf("%d",&input_num);
        if(input_num < x) printf("%d ",input_num);
            
    }
    return 0;
}
