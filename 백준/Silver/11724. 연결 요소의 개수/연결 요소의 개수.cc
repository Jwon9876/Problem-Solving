//
//  main.cpp
//  BOJ_11724
//
//  Created by 최주원 on 2021/08/18.
//
#include <iostream>
#include <cstdio>
#include <vector>
#include <queue>

using namespace std;

void makeGraph(vector <int> *g, int v){
    
    for(int i = 0; i < v; i++){
        
        int u, v;
        scanf("%d %d", &u, &v);
        
        g[u].push_back(v);
        g[v].push_back(u);
    }
}

void bfs(vector <int> *g, bool *visited, int v){
    
    queue <int> q;
    visited[v] = true;
    q.push(v);
    
    while(!q.empty()){
        
        int now = q.front();
        q.pop();
        
        
        for(int i = 0; i < g[now].size(); i++){
         
            int next = g[now][i];
            if(!visited[next]){
                q.push(next);
                visited[next] = true;
            }
        }
    }
}

int isConnected(int u, vector <int> *g){
 
    bool visited[u + 1];
    for(int i = 0; i <= u; i++)
        visited[i] = false;
    
    int count = 0;
    
    for(int i = 1; i <= u; i++){
        
        if(visited[i]) continue;
        bfs(g, visited, i);
        count++;
    }
    
    return count;
}


int main(int argc, const char * argv[]) {
    // insert code here...
    int u, v;
    scanf("%d %d", &u, &v);
    
    vector <int> g[u + 1];
    makeGraph(g, v);
    
    printf("%d\n", isConnected(u, g));
}
