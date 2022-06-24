#include <iostream>
#include <cstdio>

int main(){
    
    int hour, min, addingMin;
    
    scanf("%d %d", &hour, &min);
    scanf("%d", &addingMin);

    hour += (min + addingMin) / 60;
    min = (min + addingMin) % 60;
    hour %= 24;
    
    printf("%d %d\n", hour, min);
    
}
