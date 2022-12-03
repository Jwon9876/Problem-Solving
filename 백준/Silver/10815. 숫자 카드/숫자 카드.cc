#include <cstdio>
#include <vector>
#include <algorithm>

using namespace std;

vector<long long> card;

int binarySearch(int n, long long target){
    
    int start = 0;
    int end = n - 1;
    int mid;
    
    while(end - start >= 0) {
        mid = (start + end) / 2;
        if(card[mid] == target){
            return 1;
        }
        else if(card[mid] > target){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    
    return 0;
}


int main() {

    int n, m;
    long long target, value;
    
    scanf("%d", &n);
    for(int i = 0; i < n; i++){
        scanf("%lld", &value);
        card.push_back(value);
    }
    
    sort(card.begin(), card.end());
    
    scanf("%d", &m);
    for(int j = 0; j < m; j++){
        scanf("%lld", &target);
        printf("%d ", binarySearch(n, target));
    }
    
    return 0;
}
