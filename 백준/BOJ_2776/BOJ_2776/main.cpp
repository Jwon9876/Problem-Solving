#include <cstdio>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> note1;

bool binarySearch(int target){

    int mid;
    int start = 0;
    int end = note1.size() - 1;
    
    while(end - start >= 0){
        
        mid = (start + end) / 2;
        
        if(note1[mid] == target){
            return 1;
        }
        else if(note1[mid] > target){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    
    return 0;
}

int main(){
    
    int testCaseIter;
    int inputIter;
    int tempInput;
    
    scanf("%d", &testCaseIter);
    
    for(int i = 0; i < testCaseIter; i++){
        
        scanf("%d", &inputIter);
        for(int j = 0; j < inputIter; j++){
            scanf("%d", &tempInput);
            note1.push_back(tempInput);
        }
        
        sort(note1.begin(), note1.end());
                
        scanf("%d", &inputIter);
        for(int k = 0; k < inputIter; k++){
            scanf("%d", &tempInput);
            
            if(binarySearch(tempInput)){
                printf("1\n");
            } else{
                printf("0\n");
            }
        }
        
        note1.clear();
        
    }
}
