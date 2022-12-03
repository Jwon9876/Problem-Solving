

#include <stdio.h>

int main(){
    /*
     n = 1 -> sk
     n = 2 -> cy
     n = 3 => sk
     n = 4 -> cy
     n = 5 -> sk
     
     n = 6 -> cy
     */
    
    int n;
    scanf("%d", &n);
    
    char winner[3][5] = {"CY", "SK"};
    
    printf("%s\n", winner[n % 2]);
}
