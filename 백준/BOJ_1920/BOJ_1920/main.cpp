#include <cstdio>
#include <algorithm>

using namespace std;

int A[100001];

int binarySearch(int len, int x){
    
    int start = 1;
    int end = len;
    int mid;
    
    while(end - start >= 0){
        
        mid = (start + end) / 2;
        
        if(A[mid] == x){
            return 1;
        }
        else if(A[mid] > x){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    
    return 0;
}

int main() {
    
    int n, count, x;
    
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        scanf("%d", &A[i]);
    }
    sort(A + 1, A + n + 1);
    
    scanf("%d", &count);
    for (int j = 1; j <= count; j++) {
        scanf("%d", &x);
        printf("%d\n", binarySearch(n, x));
    }
    
    return 0;
}
