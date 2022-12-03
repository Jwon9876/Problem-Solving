//
//  main.cpp
//  BOJ_18258
//
//  Created by 최주원 on 2021/07/23.
//

#include <iostream>
#include <queue>
#include <cstring>
#include <cstdio>
#include <string.h>
#include <string>
#include <stdlib.h>

using namespace std;

//push X: 정수 X를 큐에 넣는 연산이다.
//pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
//size: 큐에 들어있는 정수의 개수를 출력한다.
//empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
//front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
//back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.


//strcmp return value 같을 떄, 0 return


//char str[100];
//fgets(str, 100, stdin);
//
//char *strCopy = str;
//
//char *tok=strtok(strCopy, " ");
//
//tok = strtok(NULL, " ");
//printf("token : %s\n", tok);




void pop(queue<int> &q){
    if(q.size() == 0) {
        printf("-1\n");
    }
    else{
        printf("%d\n", q.front());
        q.pop();
    }
}


void size(queue<int> &q){
    printf("%lu\n", q.size());
}

void back(queue<int> &q){

    if(q.size() == 0) {
        printf("-1\n");
    }
    else{
        printf("%d\n", q.back());
    }
}

void empty(queue<int> &q){
    printf("%d\n", q.empty());
}

void front(queue<int> &q){
    
    if(q.size() == 0) {
        printf("-1\n");
    }
    else{
        printf("%d\n", q.front());
    }
}


int main(int argc, const char * argv[]) {
    // insert code here...
    int iter, num;
    char str[100];
    scanf("%d",&iter);
    queue <int> q;
    
    
    const char* str1 = "pop";
    const char* str2 = "size";
    const char* str3 = "back";
    const char* str4 = "empty";
    const char* str5 = "front";
    const char* str6 = "push";
    
    
    while(iter > 0){
        
        scanf("%s", str);
        
        if(strcmp(str, str1) == 0){
            pop(q);
        }
    
            
        else if(strcmp(str, str2) == 0){
            size(q);
        }
            
        else if(strcmp(str, str3) == 0){
            back(q);
        }
        
        else if(strcmp(str, str4) == 0){
            empty(q);
        }
            
        else if(strcmp(str, str5) == 0){
            front(q);
        }
           
        else if((strcmp(str, str6) == 0)){
            
            scanf("%d", &num);
            q.push(num);
        }
        iter--;
    }
}
