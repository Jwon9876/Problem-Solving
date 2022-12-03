#include <stdio.h>




using namespace std;


int main(){
    
    
    
    int arr[1001];
    
    arr[1] = 1;
    arr[2] = 3;
    
    for(int i = 3; i <= 1000; i++){
        arr[i] = arr[i - 1] + arr[i - 2] * 2;
        arr[i] %= 10007;
    }
    
    
    int width;
    scanf("%d", &width);
    printf("%d\n", arr[width] % 10007);
    
    
    
    
}
