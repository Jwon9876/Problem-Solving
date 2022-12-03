//
//  main.cpp
//  BOJ_11758
//
//  Created by 최주원 on 2021/08/02.
//

#include <iostream>
#include <cstdio>

typedef struct {
    int x, y;
}Point;

long long CCW(Point &p1, Point &p2, Point &p3){
    
    
    long long tmp = (p1.x * p2.y) + (p2.x * p3.y) + (p3.x * p1.y);
    
    tmp = tmp - ((p1.x * p3.y) + (p2.x * p1.y) + (p3.x * p2.y));
    
    if(tmp > 0) return 1;
    
    else if(tmp < 0) return -1;
    
    else    return 0;
    
}





int main(int argc, const char * argv[]) {
    // insert code here...
    Point p[3];
    scanf("%d %d %d %d %d %d", &p[0].x, &p[0].y, &p[1].x, &p[1].y, &p[2].x, &p[2].y);
    
    long long num = CCW(p[0], p[1], p[2]);
    printf("%lld\n", num);
    
    
}

