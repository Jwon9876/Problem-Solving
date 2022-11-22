#include <cstdio>
#include <string>

using namespace std;

int main(){
    int month, day;

    char days[7][10] ={"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};

    scanf("%d %d", &month, &day);
    int n = day;
    
    while(month > 1){
        switch (month) {
            case 2:
                n += 31;
                break;
            case 3:
                n += 28;
                break;
            case 4:
                n += 31;
                break;
            case 5:
                n += 30;
                break;
            case 6:
                n += 31;
                break;
            case 7:
                n += 30;
                break;
            case 8:
                n += 31;
                break;
            case 9:
                n += 31;
                break;
            case 10:
                n += 30;
                break;
            case 11:
                n += 31;
                break;
            case 12:
                n += 30;
                break;
            default:
                break;
        }
        month--;
    }
    
    printf("%s\n", days[(n % 7)]);

    
}
